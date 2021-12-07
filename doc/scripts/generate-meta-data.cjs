const fs = require('fs');
const path = require('path');
const glob = require('glob');
const ts = require('typescript');

const compilerOptions = { allowJs: true, checkJs: true };

/**
 * Check if node has an export modifier
 * @param node
 * @returns true if the node has the export modifier
 */
function isExported(node) {
  const { modifiers } = node;
  if (!modifiers) return false;
  for (const modifier of modifiers) {
    if (ts.SyntaxKind[modifier.kind] === 'ExportKeyword') return true;
  }
  return false;
}

/**
 * Extract information from a source file using Typescript's AST
 */
function extract(sourceFile, typeChecker) {
  const isExport = {};
  const data = [];

  ts.forEachChild(sourceFile, (node) => {
    // node is a function
    if (ts.isFunctionDeclaration(node)) {
      const name = node.name.text;

      isExport[name] = isExported(node);

      // extract jsdoc comment if available
      const comment =
        node.jsDoc && node.jsDoc.length > 0 ? node.jsDoc[0].comment : null;

      // get function type
      const type = typeChecker.typeToString(
        typeChecker.getTypeAtLocation(node),
        node
      );

      // process parameters
      const params = node.parameters.map((param) => {
        // extract jsdoc string if available
        const jsDoc =
          param.jsDocCache && param.jsDocCache.length > 0
            ? param.jsDocCache[0]
            : null;
        // extract comment
        let comment = jsDoc ? jsDoc.comment : null;
        // remove the '-' that parameter descriptions usually start with
        if (comment && comment.trim().startsWith('-')) {
          comment = comment.slice(1).trim();
        }

        return {
          name: param.getText(),
          type: typeChecker.typeToString(
            typeChecker.getTypeAtLocation(param),
            param
          ),
          description: comment,
          optional: jsDoc.isBracketed,
          default: param.initializer ? param.initializer.getText() : null,
        };
      });

      data.push({ name, description: comment, type, params });
    }

    // node is a variable statement
    else if (ts.isVariableStatement(node)) {
      // only the first variable declaration is processed
      const declaration = node.declarationList.declarations[0];
      const name = declaration.name.getText(sourceFile);

      // get type of the declared variable
      const type = typeChecker.typeToString(
        typeChecker.getTypeAtLocation(declaration),
        declaration
      );

      // is the declared variable exported?
      isExport[name] = isExported(node);

      // extract jsdoc comment
      const symbol = typeChecker.getSymbolAtLocation(declaration.name);
      const comment = ts.displayPartsToString(
        symbol.getDocumentationComment(typeChecker)
      );

      // the value that the variable is initialized with
      const defaultValue = declaration.initializer
        ? declaration.initializer.getText()
        : null;

      data.push({
        name,
        description: comment,
        type,
        optional: defaultValue !== null,
        default: defaultValue,
      });
    }

    // records variables that are exported at a later stage
    else if (ts.isExportAssignment(node)) {
      const name = node.expression.getText();
      isExport[name] = true;
    } else if (ts.isExportDeclaration(node)) {
      node.exportClause.elements.forEach((element) => {
        isExport[element.getText()] = true;
      });
    }
  });

  return data.filter((d) => isExport[d.name]);
}

/**
 * Extract documentation from a javascript file
 */
function extractJsFile(file) {
  const program = ts.createProgram([file], compilerOptions);
  var sourceFile = program.getSourceFile(file);
  let typeChecker = program.getTypeChecker();

  const data = extract(sourceFile, typeChecker);

  return data;
}

/**
 * Extract documentation from a svelte file
 */
function extractSvelteFile(file) {
  const tmpFile = 'tmp.ts';

  // extract the source code within the <script> tag
  const content = fs.readFileSync(file, 'utf-8');
  const match = content.match(/<script.*>([\S\s]*)<\/script>/m);
  const source = match[1];

  const sourceFile = ts.createSourceFile(
    tmpFile,
    source,
    ts.ScriptTarget.Latest,
    undefined,
    ts.ScriptKind.JS
  );

  const defaultCompilerHost = ts.createCompilerHost({});

  const customCompilerHost = {
    getSourceFile: (name, languageVersion) => {
      if (name === tmpFile) {
        return sourceFile;
      } else {
        return defaultCompilerHost.getSourceFile(name, languageVersion);
      }
    },
    writeFile: () => {},
    getDefaultLibFileName: () => '../src/lib/types.d.ts',
    useCaseSensitiveFileNames: () => false,
    getCanonicalFileName: (filename) => filename,
    getCurrentDirectory: () => '',
    getNewLine: () => '\n',
    getDirectories: () => [],
    fileExists: () => true,
    readFile: () => '',
  };

  const program = ts.createProgram(
    ['tmp.ts'],
    { allowJs: true, checkJs: true },
    customCompilerHost
  );

  const typeChecker = program.getTypeChecker();

  // extract component-level jsdoc
  const name = path.basename(file, '.svelte');
  const firstStatement = sourceFile.statements[0];
  const description = firstStatement.jsDoc
    ? firstStatement.jsDoc[0].comment
    : null;

  const props = extract(sourceFile, typeChecker);

  const data = { name, description, props };

  return data;
}

function makeDirectories(path) {
  if (fs.existsSync(path)) return;
  const dirs = path.split('/').slice(0, -1);
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs.slice(0, i + 1).join('/');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
}

const srcPrefix = '../src/lib/';
const outPrefix = 'meta/';

// process actions and stores
glob(srcPrefix + '+(actions|stores)/*.js', function (er, files) {
  if (er) throw new Error(er);
  files.forEach((file) => {
    console.log(file);
    const data = extractJsFile(file);
    const out = file
      .replace(srcPrefix, outPrefix)
      .replace(path.extname(file), '.json');
    makeDirectories(out);
    fs.writeFileSync(out, JSON.stringify(data, null, 2));
  });
});

// process shared svelte components
glob(srcPrefix + 'components/shared/**/*.svelte', function (er, files) {
  if (er) throw new Error(er);
  files.forEach((file) => {
    console.log(file);
    const data = extractSvelteFile(file);
    const out = file
      .replace(srcPrefix, outPrefix)
      .replace(path.extname(file), '.json');
    makeDirectories(out);
    fs.writeFileSync(out, JSON.stringify(data, null, 2));
  });
});
