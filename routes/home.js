import controller from '../controllers/home.js';
//const controller = require('../controllers/home');
export function home(app){
    app.get('/', controller.index);
}

export default home;
