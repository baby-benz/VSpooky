import * as vscode from 'vscode';
import { play, pause, refresh } from './controllers/control';
//For button
import init from './init';

// import { TreePlaylistProvider } from './components/tree-playlists';
// import { TreeTrackProvider } from './components/tree-track';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "spotifyplayer" is now active!');

	//For buttons
	init(context);

	let disposable = vscode.commands.registerCommand('extension.displayAll', () => {
		// The code you place here will be executed every time your command is executed

		//For buttons
		init(context);
		
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!');

		//Use it for creating new treeView
		// const playlistTreeView = vscode.window.createTreeView('vscode-spotify-playlists', { treeDataProvider: new TreePlaylistProvider() });
    	// const treeTrackProvider = new TreeTrackProvider();
    	// const trackTreeView = vscode.window.createTreeView('vscode-spotify-tracks', { treeDataProvider: treeTrackProvider });
		// treeTrackProvider.bindView(trackTreeView);
	});
	vscode.commands.registerCommand('extension.playButtons', () => {
		
		play();

	});
	vscode.commands.registerCommand('extension.pauseButtons', () => {
		
		pause();

	});
	vscode.commands.registerCommand('extension.refreshButtons', () => {
		
		refresh();

	});
	context.subscriptions.push(disposable);
}