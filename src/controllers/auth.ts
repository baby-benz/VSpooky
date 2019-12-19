import * as express from 'express';

export function getAuth(){
    const app = express();

    app.get('/login', function(_req, res) {
        var scopes = 'user-modify-playback-state';
        res.redirect('https://accounts.spotify.com/authorize' +
          '?response_type=code' +
        //   '&client_id=' + my_client_id +
          (scopes ? '&scope=' + encodeURIComponent(scopes) : ''));
        //   +
        //   '&redirect_uri=' + encodeURIComponent(redirect_uri));
        });
}