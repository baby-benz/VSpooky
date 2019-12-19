// import { buildConfigFromPackageJson } from './packageJson'
import * as vscode from 'vscode';
import { RunButton } from './types';
import * as path from 'path';

const registerCommand = vscode.commands.registerCommand;

const disposables: any[] = [];

const init = async (_context: vscode.ExtensionContext) => {
	disposables.forEach(d => d.dispose());
	const config = vscode.workspace.getConfiguration('actionButtons');
	const defaultColor = config.get<string>('defaultColor');
	const reloadButton = config.get<string>('reloadButton');
	const playButton = config.get<string>('playButton');
	const pauseButton = config.get<string>('pauseButton');

	if (reloadButton !== null) {
		loadButton({
			vsCommand: 'extension.refreshButtons',
			name: reloadButton || '↻',
			color: defaultColor || 'white',
			command: 'Refreshes the action buttons'
		});
	}

	if (playButton !== null) {
		loadButton({
			vsCommand: 'extension.playButtons',
			name: reloadButton || '←',
			color: defaultColor || '#ff9900',
			command: 'Plays the action buttons'
		});
	}

	if (pauseButton !== null) {
		loadButton({
			vsCommand: 'extension.pauseButtons',
			name: reloadButton || '||',
			color: defaultColor || '#99ff00',
			command: 'Stops the action buttons'
		});
	}
	
};

function loadButton({
	command,
	name,
	color,
	vsCommand
}: RunButton) {
	const runButton = vscode.window.createStatusBarItem(1, 0);
	runButton.text = name;
	runButton.color = color || 'white';
	runButton.tooltip = command;

	runButton.command = vsCommand;
	runButton.show();
	disposables.push(runButton);
}

export default init;
