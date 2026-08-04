import fs from 'node:fs';
import ts from 'typescript';

const sourcePath = new URL('../constants.tsx', import.meta.url);
const contentPath = new URL('../content/managed.json', import.meta.url);
const sourceText = fs.readFileSync(sourcePath, 'utf8');
const source = ts.createSourceFile('constants.tsx', sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

const evaluate = (node) => {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(evaluate);
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(node.properties.map((property) => {
      if (!ts.isPropertyAssignment(property)) throw new Error(`Unsupported property: ${property.getText(source)}`);
      const name = ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)
        ? property.name.text
        : property.name.getText(source);
      return [name, evaluate(property.initializer)];
    }));
  }
  if (ts.isTemplateExpression(node)) {
    let value = node.head.text;
    for (const span of node.templateSpans) value += String(evaluate(span.expression)) + span.literal.text;
    return value;
  }
  if (ts.isPrefixUnaryExpression(node) && ts.isNumericLiteral(node.operand)) {
    return node.operator === ts.SyntaxKind.MinusToken ? -Number(node.operand.text) : Number(node.operand.text);
  }
  throw new Error(`Unsupported expression: ${node.getText(source).slice(0, 120)}`);
};

let projectsNode;
source.forEachChild((node) => {
  if (!ts.isVariableStatement(node)) return;
  for (const declaration of node.declarationList.declarations) {
    if (ts.isIdentifier(declaration.name) && declaration.name.text === 'CORE_PROJECTS') {
      projectsNode = declaration.initializer;
    }
  }
});

if (!projectsNode || !ts.isArrayLiteralExpression(projectsNode)) throw new Error('CORE_PROJECTS was not found');

const existing = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
existing.projects = evaluate(projectsNode);
fs.writeFileSync(contentPath, `${JSON.stringify(existing, null, 2)}\n`);
console.log(`Migrated ${existing.projects.length} projects into the admin-managed content file.`);
