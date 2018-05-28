const TeamModel = require('../models/team_model'),
    tm = new TeamModel(); 

class TeamController {
    getAll(req, res, next) {
        tm.getAll((err, data) => {
            if (!err) {
                res.render('index', {
                    title: 'Indentation War',
                    data: data
                }); 
            }
        })
    }

    getOne(req, res, next) {
        let id = req.params.id; 
        console.log(id);

        tm.getOne(id, (err, data) => {
            if (!err) {
                res.render('edit', { 
                    title: 'Editar vendedor',
                    data: data 
                });
            }
        })
    }

    save(req, res, next) {
        let contacto = {
            idSeller: (req.body.idSeller || 0),
            completeName: req.body.completeName, 
            adressLine: req.body.adressLine,
            cellPhone: req.body.cellPhone
        };

        console.log(contacto);
        tm.save(contacto, (err) => {
            if (!err) {
                res.redirect('/');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    delete(req, res, next) {

        let id = req.params.id; 
        console.log(id)
        tm.delete(id, (err, data) => {
            if (!err) {
                res.redirect('/')
            } else {
                return next(new Error('Registro no encontrado'))
            }
        });
    }

    addForm(req, res, next) {
        res.render('add', { title: 'Agregar Contacto' });
    }

    index2(req, res, next) {
        res.render('index2');
    }

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';

        res.render('error', { error: err });
    }
}

module.exports = TeamController;