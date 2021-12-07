import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const compilerOptions = { allowJs: true, checkJs: true };

/**
 * Check if a function or variable is exported
 * @param {import('typescript').Node} node
 * @returns {boolean}
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
 * Extract jsdoc comment from `node`
 * @param {import('typescript').Node} node
 * @returns {string}
 */
function extractJsdocComment(node) {
  if (!node.jsDoc) return null;
  if (node.jsDoc.length === 0) return null;
  return node.jsDoc.map((d) => d.comment).join(' ');
}

/**
 * Create Typescript AST and types from file
 * @param {string} file
 * @param {import('typescript').CompilerOptions} compilerOptions
 * @returns {{ program: import('typescript').Program, sourceFile: import('typescript').SourceFile, typeChecker: import('typescript').TypeChecker }}
 */
function createProgramFromFile(file, compilerOptions) {
  const program = ts.createProgram([file], compilerOptions);
  const sourceFile = program.getSourceFile(file);
  const typeChecker = program.getTypeChecker();
  return { program, sourceFile, typeChecker };
}

/**
 * Create Typescript AST and types from source code
 * @param {string} source
 * @param {import('typescript').CompilerOptions} compilerOptions
 * @returns {{ program: import('typescript').Program, sourceFile: import('typescript').SourceFile, typeChecker: import('typescript').TypeChecker }}
 */
function createProgramFromSource(source, compilerOptions) {
  const tmpFile = 'tmp.ts';

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
    compilerOptions,
    customCompilerHost
  );

  const typeChecker = program.getTypeChecker();

  return { program, sourceFile, typeChecker };
}

/**
 * Extract information from a source file using Typescript's AST and type checker
 * @param {import('typescript').SourceFile} sourceFile
 * @param {import('typescript').TypeChecker} typeChecker
 * @returns {any}
 */
function extractDoc(sourceFile, typeChecker) {
  const isExport = {};
  const data = [];

  ts.forEachChild(sourceFile, (node) => {
    // node is a function
    if (ts.isFunctionDeclaration(node)) {
      const name = node.name.text;

      isExport[name] = isExported(node);

      // extract jsdoc comment if available
      const comment = extractJsdocComment(node);

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
          name: param.name.text,
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
      let type = typeChecker.typeToString(
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

      // if no type can be inferred, grab the type from the jsdoc tag
      if (type === 'any') {
        const tags = symbol.getJsDocTags(typeChecker);
        if (tags && tags.length > 0) {
          const typeTag = tags.find(({ name }) => name === 'type');
          if (typeTag)
            type = typeTag.text.map((t) => t.text.slice(1, -1)).join(' ');
        }
      }

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
 * @param {string} file
 * @returns
 */
export function extractDocFromJsFile(file) {
  const { sourceFile, typeChecker } = createProgramFromFile(
    file,
    compilerOptions
  );
  const data = extractDoc(sourceFile, typeChecker);
  return data;
}

/**
 * Extract documentation from a svelte file
 * @param {string} file
 * @returns
 */
export function extractDocFromSvelteFile(file) {
  // extract the source code within the <script> tag
  const content = fs.readFileSync(file, 'utf-8');
  const match = content.match(/<script.*>([\S\s]*)<\/script>/m);
  const source = match[1];

  const { sourceFile, typeChecker } = createProgramFromSource(
    source,
    compilerOptions
  );

  // extract component-level jsdoc
  const name = path.basename(file, '.svelte');
  const description = extractJsdocComment(sourceFile.statements[0]);

  const props = extractDoc(sourceFile, typeChecker);

  const data = { name, description, props };

  return data;
}