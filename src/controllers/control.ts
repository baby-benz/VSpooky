import {window} from 'vscode';

export function play() {
    window.showInformationMessage('There is a script for play music');
}

export function pause() {
    window.showInformationMessage('There is a script for pause music');
}

export function refresh() {
    window.showInformationMessage('There is a script for refresh playlist');
}