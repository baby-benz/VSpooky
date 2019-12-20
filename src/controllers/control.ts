import SpotifyWebApi, * as spotifyWebApi from 'spotify-web-api-js';
import {window} from 'vscode';
export function play(token: string) {
    token = token + token;
    window.showInformationMessage('There is a script for play music');
}

export function pause(token: string) {
  var cmd=require('node-cmd');
 
    cmd.get(
        'curl -X "PUT" "https://api.spotify.com/v1/me/player/pause" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer ' + token,
        function(err : any, data : string){
          if (!err) {
            // console.log('the current working dir is : \n',data)
            data = data.replace(/\s/g, "");
            console.log('the current working dir is : \n',data)
            var index = data.search("[0-9][0-9]:[0-9][0-9]")
            // console.log(data.search("[0-9][0-9]:[0-9][0-9]"))
            var time = data.substring(index, index+5);
            var minutes = Number(data.substring(index, index+2));
            var seconds = Number(data.substring(index+3, index+5));
            var NumTime = minutes*60 + seconds;
            data = data.substring(index+5)
            console.log("Data", data);
            console.log(time, " ", minutes, " ", seconds, " ", NumTime)
         } else {
            console.log('error', err)
         }
        }
    );


}

export function refresh() {
    window.showInformationMessage('There is a script for refresh playlist');
}