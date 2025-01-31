import * as vscode from 'vscode';
import ollama, { Ollama } from 'ollama';
import { WebView_v3 } from './skeleton/skeleton';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	// const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });
	
	const outputPanel = vscode.window.createOutputChannel('Deepseek-go output panel');
	outputPanel.appendLine('Congratulations, your extension "deepseek-go" is now active!');
	outputPanel.show();
	
	const disposable = vscode.commands.registerCommand('deepseek-go.deepseek_chatbot', () => {
		
		const panel = vscode.window.createWebviewPanel(
			'deepseek-go-chatbot',
			'chat with deepseek-r1 model',
			vscode.ViewColumn.Two,
			{
				enableScripts: true,
				retainContextWhenHidden: true // this will keep the state of the webview
			}
		);
		
		const cssPath = panel.webview.asWebviewUri(
			vscode.Uri.joinPath(context.extensionUri, 'media', 'skeletonV3.style.css')
		).toString();
		panel.webview.html = WebView_v3(context, cssPath);
		
		let currentAbortController: boolean = false;
		panel.webview.onDidReceiveMessage(async (message: any) =>{
			if (message.commands === 'chat') {
				const prompt = message.text;
				

				if(currentAbortController){ 
					ollama.abort();
				}

				currentAbortController = true;
				// outputPanel.appendLine('prompt: ' + message);
				outputPanel.appendLine('prompt: ' + prompt);
				let res = '';

				try {
					const stream = await ollama.chat({
						model: 'deepseek-r1:1.5b',
						messages: [{
							role: 'user',
							content: prompt
						}],
						stream: true,
					});

					
					for await (const chunk of stream) {
						if( chunk.message.content === "</think>"){
							outputPanel.appendLine('thinking > ' + res);
							res = '';
							continue;
						}
						res += chunk.message.content;
						panel.webview.postMessage({ commands: 'res-from-deepseek-go', text: res });
					}
					outputPanel.appendLine('stream > ' + res);
				} catch (err: any) {
					if (err.name === 'AbortError'){
						console.log('Request was Aborted');
					}
					panel.webview.postMessage({ commands: 'res-from-deepseek-go', text: res + '\nError: ' + String(err) });
				} finally {
					currentAbortController = false;
				}
			}
			else if (message.commands === 'abort'){
				ollama.abort();
			}
		});

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
