import express from 'express';
import home from '../routes/home.js';

const app = express();

app.set('port', 3000);

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('view', './app/views');

home(app);

export default app;