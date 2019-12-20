import * as vscode from 'vscode';
import { play, pause, repeat, next } from './controllers/control';
import { getToken } from './auth/auth';
//For button
import init from './init';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "spotifyplayer" is now active!');

	//For buttons
	init(context);

	let token: string = getToken();
	
	//play music in app
	vscode.commands.registerCommand('extension.playButtons', () => {
		
		play(token);

	});

	//pause music in app
	vscode.commands.registerCommand('extension.pauseButtons', () => {
		
		pause(token);

	});

	//set repeat mode on track
	vscode.commands.registerCommand('extension.refreshButtons', () => {
		
		repeat(token);

	});
	//play music in app
	vscode.commands.registerCommand('extension.nextButtons', () => {
		
	next(token);

	});

	//off repeat mode
	vscode.commands.registerCommand('extension.unrepeatingButtons', () => {
		
		next(token);
	
		});

	let disposable = vscode.commands.registerCommand('extension.reloadButtons', () => {

		//For buttons
		init(context);
		//Use it for creating new treeView
		// const playlistTreeView = vscode.window.createTreeView('vscode-spotify-playlists', { treeDataProvider: new TreePlaylistProvider() });
    	// const treeTrackProvider = new TreeTrackProvider();
    	// const trackTreeView = vscode.window.createTreeView('vscode-spotify-tracks', { treeDataProvider: treeTrackProvider });
		// treeTrackProvider.bindView(trackTreeView);
	});

	context.subscriptions.push(disposable);
}