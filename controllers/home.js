export function controller(){
    controller.index((req, res) => {
        res.render('index', {nome: 'Exporess'});
    });
    return controller;
}

export default controller;