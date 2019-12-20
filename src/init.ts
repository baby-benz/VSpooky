// import { buildConfigFromPackageJson } from './packageJson'
import * as vscode from 'vscode';
import { RunButton } from './types';
// import * as path from 'path';

// const registerCommand = vscode.commands.registerCommand;

const disposables: any[] = [];

const init = async (_context: vscode.ExtensionContext) => {
	disposables.forEach(d => d.dispose());
	const config = vscode.workspace.getConfiguration('actionButtons');
	const defaultColor = config.get<string>('defaultColor');
	const reloadButton = config.get<string>('reloadButton');
	const playButton = config.get<string>('playButton');
	const pauseButton = config.get<string>('pauseButton');
	const nextButton = config.get<string>('nextButton');
	const unrepeatButton = config.get<string>('unrepeatButton');

	if (playButton !== null) {
		loadButton({
			vsCommand: 'extension.playButtons',
			name: reloadButton || '▷',
			color: defaultColor || '#ff9900',
			command: 'Play music'
		});
	}

	if (pauseButton !== null) {
		loadButton({
			vsCommand: 'extension.pauseButtons',
			name: reloadButton || '||',
			color: defaultColor || '#99ff00',
			command: 'Stop music playback'
		});
	}

	if (nextButton !== null) {
		loadButton({
			vsCommand: 'extension.nextButtons',
			name: reloadButton || '→',
			color: defaultColor || '#99ff00',
			command: 'next track'
		});
	}

	if (reloadButton !== null) {
		loadButton({
			vsCommand: 'extension.refreshButtons',
			name: reloadButton || '⇆',
			color: defaultColor || 'green',
			command: 'Repeat playlist'
		});
	}

	if (unrepeatButton !== null) {
		loadButton({
			vsCommand: 'extension.unrepeatingButtons',
			name: reloadButton || '⇆',
			color: defaultColor || 'white',
			command: 'off repeat mode'
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
