export function play(token: string) {
    var cmd=require('node-cmd');
 
    cmd.get(
        'curl -X "PUT" "https://api.spotify.com/v1/me/player/play" '
        +'-H "Accept: application/json" '
        +'-H "Content-Type: application/json" '
        +'-H "Authorization: Bearer ' + token,
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

export function pause(token: string) {
  var cmd=require('node-cmd');
 
    cmd.get(
        'curl -X "PUT" "https://api.spotify.com/v1/me/player/pause" '
        +'-H "Accept: application/json" '
        +'-H "Content-Type: application/json" '
        +'-H "Authorization: Bearer ' + token,
        function(err : any, data : string){
          if (!err) {
            // console.log('the current working dir is : \n',data)
            data = data.replace(/\s/g, "");
            console.log('the current working dir is : \n',data);
            var index = data.search("[0-9][0-9]:[0-9][0-9]");
            // console.log(data.search("[0-9][0-9]:[0-9][0-9]"))
            var time = data.substring(index, index+5);
            var minutes = Number(data.substring(index, index+2));
            var seconds = Number(data.substring(index+3, index+5));
            var NumTime = minutes*60 + seconds;
            data = data.substring(index+5);
            console.log("Data", data);
            console.log(time, " ", minutes, " ", seconds, " ", NumTime);
         } else {
            console.log('error', err);
         }
        }
    );
}

export function next(token: string){
  var cmd=require('node-cmd');
 
    cmd.get(
        'curl -X "POST" "https://api.spotify.com/v1/me/player/next" '
        +'-H "Accept: application/json" '
        +'-H "Content-Type: application/json" '
        +'-H "Authorization: Bearer ' + token,
    );
}

export function repeat(token: string) {
    var cmd=require('node-cmd');
 
    cmd.get(
        'curl -X "PUT" "https://api.spotify.com/v1/me/player/repeat?state=track" '
        +'-H "Accept: application/json" '
        +'-H "Content-Type: application/json" '
        +'-H "Authorization: Bearer ' + token,
    );
}


export function unrepeat(token: string){
    var cmd=require('node-cmd');
 
    cmd.get(
        'curl -X "PUT" "https://api.spotify.com/v1/me/player/repeat?state=off" '
        +'-H "Accept: application/json" '
        +'-H "Content-Type: application/json" '
        +'-H "Authorization: Bearer ' + token,
    );
}