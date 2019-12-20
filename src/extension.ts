import * as vscode from 'vscode';
import { play, pause, refresh } from './controllers/control';
import SpotifyWebApi, * as spotifyWebApi from 'spotify-web-api-js';
//For button
import init from './init';

// import { TreePlaylistProvider } from './components/tree-playlists';
// import { TreeTrackProvider } from './components/tree-track';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "spotifyplayer" is now active!');

	//For buttons
	init(context);

	// var spotifyApi = new SpotifyWebApi(); 
	let token: string = 'BQB4x0RuN3HK9iQhcre4eXRW1eENNb-CN2Si5us6IUYqysh930pOXLa2AjR-2F4lMYU9w8pjTZrFE2HHP8Np7MQvCfzLF8UhQHGkPnsMF_ETI2xYMlD1I77VcLnRCbf7rtrfbweZUDMjDgJMDMYAgemozIr9SHcmEHR_HBA"';
	// spotifyApi.setAccessToken(token);
	
	//play music in app
	vscode.commands.registerCommand('extension.playButtons', () => {
		
		play(token);

	});

	//pause music in app
	vscode.commands.registerCommand('extension.pauseButtons', () => {
		
		pause(token);

	});
	vscode.commands.registerCommand('extension.refreshButtons', () => {
		
		refresh();

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