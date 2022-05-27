import http from 'http';
import app from './config/express.js';

http.createServer(app).listen(app.get('port'), function(){
    console.log(`Express Server escutando na porta ${app.get('port')}`);
})
