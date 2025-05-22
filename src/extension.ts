// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';

function checkOllamaInstalled(): Promise<boolean> {
	return new Promise((resolve) => {
		exec('ollama --version', (error) => {
			resolve(!error);
		});
	});
}

function installOllama(): Promise<void> {
	return new Promise((resolve, reject) => {
		// Windows install: use winget if available, otherwise prompt manual
		exec('winget --version', (err) => {
			if (!err) {
				const terminal = vscode.window.createTerminal({ name: 'Install Ollama' });
				terminal.show();
				terminal.sendText('winget install Ollama.Ollama', true);
				vscode.window.showInformationMessage('Ollama installation started in a new terminal. Please follow the prompts to complete installation.');
				resolve();
			} else {
				vscode.window.showErrorMessage('winget is not available. Please install Ollama manually from https://ollama.com/download');
				reject();
			}
		});
	});
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	// Check if ollama is installed
	const isInstalled = await checkOllamaInstalled();
	if (!isInstalled) {
		const answer = await vscode.window.showInformationMessage(
			"It doesn't look like you have ollama installed. Would you like me to install it for you?",
			'Yes', 'No'
		);
		if (answer === 'Yes') {
			try {
				await installOllama();
			} catch {
				// Already handled in installOllama
			}
		}
	}

	// Register the terminal profile provider for 'ollama'
	context.subscriptions.push(
		vscode.window.registerTerminalProfileProvider('ollama', {
			provideTerminalProfile(token) {
				return new vscode.TerminalProfile({
					name: 'ollama',
					shellPath: 'ollama',
					shellArgs: ['run', 'llama3.2']
				});
			}
		})
	);

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ollama" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('ollama.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Ollama Auto Terminal!');
	});

	context.subscriptions.push(disposable);

	// Remove auto terminal creation from activation, as the terminal profile will handle it
}

// This method is called when your extension is deactivated
export function deactivate() {}
