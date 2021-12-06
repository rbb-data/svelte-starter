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

function extract(sourceFile, typeChecker) {
  const isExport = {};
  const data = [];
  ts.forEachChild(sourceFile, (node) => {
    if (ts.isFunctionDeclaration(node)) {
      const name = node.name.text;
      isExport[name] = isExported(node);

      const comment =
        node.jsDoc && node.jsDoc.length > 0 ? node.jsDoc[0].comment : null;
      const type = typeChecker.typeToString(
        typeChecker.getTypeAtLocation(node),
        node
      );

      const params = node.parameters.map((param) => ({
        name: param.getText(),
        type: typeChecker.typeToString(
          typeChecker.getTypeAtLocation(param),
          param
        ),
        description: param.jsDocCache[0].comment,
        optional: param.jsDocCache[0].isBracketed,
        default: param.initializer ? param.initializer.getText() : null,
      }));

      data.push({ name, description: comment, type, params });
    } else if (ts.isVariableStatement(node)) {
      const declaration = node.declarationList.declarations[0];
      const name = declaration.name.getText(sourceFile);
      const type = typeChecker.typeToString(
        typeChecker.getTypeAtLocation(declaration),
        declaration
      );
      isExport[name] = isExported(node);

      const symbol = typeChecker.getSymbolAtLocation(declaration.name);
      const comment = ts.displayPartsToString(
        symbol.getDocumentationComment(typeChecker)
      );

      data.push({
        name,
        description: comment,
        type,
        default: declaration.initializer
          ? declaration.initializer.getText()
          : null,
      });
    } else if (ts.isExportAssignment(node)) {
      const name = node.expression.getText();
      isExport[name] = true;
    } else if (ts.isExportDeclaration(node)) {
      node.exportClause.elements.forEach((element) => {
        isExport[element.getText()] = true;
      });
    }
  });

  const exportedData = data.filter((d) => isExport[d.name]);

  return exportedData;
}

function extractJsFile(file) {
  const program = ts.createProgram([file], compilerOptions);
  var sourceFile = program.getSourceFile(file);
  let typeChecker = program.getTypeChecker();

  const data = extract(sourceFile, typeChecker);

  return data;
}

function extractSvelteFile(file) {
  const tmpFile = 'tmp.ts';

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

glob(srcPrefix + '+(actions|stores)/*.js', function (er, files) {
  // TODO
  if (er) {
    console.log('handle this');
  }

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

glob(srcPrefix + 'components/**/*.svelte', function (er, files) {
  // TODO
  if (er) {
    console.log('handle this');
  }

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
