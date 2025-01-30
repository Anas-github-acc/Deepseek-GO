import * as vscode from 'vscode';
import ollama from 'ollama';
import { WebView_v3 } from './skeleton/skeleton';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	const outputPanel = vscode.window.createOutputChannel('Deepseek-go output panel');
	// outputPanel.appendLine('Congratulations, your extension "deepseek-go" is now active!');
	// outputPanel.show();

	const disposable = vscode.commands.registerCommand('deepseek-go.deepseek_chatbot', () => {

		const panel = vscode.window.createWebviewPanel(
			'deepseek-go-chatbot',
			'chat with deepseek-r1 model',
			vscode.ViewColumn.Two,
			{enableScripts: true}
		);

		const cssPath = panel.webview.asWebviewUri(
			vscode.Uri.joinPath(context.extensionUri, 'media', 'skeletonV3.style.css')
		).toString();

		panel.webview.html = WebView_v3(context, cssPath);

		panel.webview.onDidReceiveMessage(async (message: any) =>{
			if (message.commands === 'chat') {
				const prompt = message.text;

				// outputPanel.appendLine('prompt: ' + prompt);
				let res = '';

				try {
					const stream = await ollama.chat({
						model: 'deepseek-r1:1.5b',
						messages: [{
							role: 'user',
							content: prompt
						}],
						stream: true
					});

					
					for await (const chunk of stream) {
						res += chunk.message.content;
						panel.webview.postMessage({ commands: 'res-from-deepseek-go', text: res });
						// outputPanel.appendLine('stream> ' + res);
					}

				} catch (err) {
					panel.webview.postMessage({ commands: 'res-from-deepseek-go', text: 'Error: ' + String(err) });
				}
			} 
		});

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
