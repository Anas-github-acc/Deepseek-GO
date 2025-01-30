import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export default function getWebviewContent(
  context: vscode.ExtensionContext,
  templateName: string,
  params?: Record<string, string>
) : string {
  const templatePath = path.join(context.extensionPath, 'media', templateName);
  
  const content = fs.readFileSync(templatePath, 'utf-8');

  
  if (params) {
    return Object.entries(params).reduce((acc, [key, value]) => {
      return acc.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }, content);
  }
  return content;
}