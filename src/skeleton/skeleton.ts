import * as vscode from 'vscode';
import getWebviewContent from './loader';

function WebView(
  context: vscode.ExtensionContext
): string {
  return getWebviewContent(context, 'skeleton.html');
}

function WebView_v3(
  context: vscode.ExtensionContext,
  cssUri: string
): string {
  return getWebviewContent(context, 'skeletonV3.html', { cssPath: cssUri});
}


export {
  WebView,
  WebView_v3
};