import express from 'express';

const app = express();

app.set('port', 3000);

app.use(express.static('./public'));

export default app;