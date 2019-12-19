// import SpotifyWebApi, * as spotifyWebApi from 'spotify-web-api-js';
import {window} from 'vscode';
// import { getAuth } from './auth';
export function play() {
    window.showInformationMessage('There is a script for play music');
}

export function pause() {
    // PUT https://api.spotify.com/v1/me/player/pause


    // curl -X "PUT" "https://api.spotify.com/v1/me/player/pause" 
    // -H "Accept: application/json" 
    // -H "Content-Type: application/json" 
    // -H "Authorization: Bearer BQBaJCglG76ZyzbdD_lqLpCn1eNkHHc1z1yP3aRb5YTsee6eAelZ6wnNfOindg4RHUjRkMu017MrT7Pz6EigNvREiaspNHmdTefgLu-Zwq3OGI3atznO_3BrtA1Va5jspYRgZvdadJYfJXQMOYOAbJ46T9ZdlO5CGaigcLU"
}

export function refresh() {
    window.showInformationMessage('There is a script for refresh playlist');
}