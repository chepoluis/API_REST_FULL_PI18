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

    index(req, res, next) {
        res.render('index');
    }

    shop(req, res, next) {
        res.render('product', {title: 'Shop'});
    }

    signup(req, res, next) { 
        res.render('signup');
    }

    login(req, res, next) {
        res.render('login');
    }

    // blog(req, res, next) {
    //     let id = req.params.id; 
    //     console.log(id);

    //     tm.getOne(id, (err, data) => {
    //         if (!err) {
    //             res.render('blog', { 
    //                 title: 'Editar vendedor',
    //                 data: data 
    //             });
    //         }
    //     })
    // } 

    blog(req, res, next) {
        tm.getAll((err, data) => {
            if (!err) {
                res.render('blog', {
                    title: 'Blog',
                    data: data
                }); 
            }
        })
    }

    productDetail(req, res, next) {
        tm.getAll((err, data) => {
            if (!err) {
                res.render('product-detail', {
                    title: 'Product detail',
                    data: data
                }); 
            }
        })
    }

    prueba(req, res, next) {
        let id = req.params.id; 
        console.log(id);

        tm.getOne(id, (err, data) => {
            if (!err) {
                res.render('prueba', { 
                    title: 'Editar vendedor',
                    data: data 
                });
            }
        })
    } 

    saveUser(req, res, next) {
        let employeed = {
            idEmployeed: (req.body.idEmployeed || 0),
            completeName: req.body.completeName, 
            adressLine: req.body.adressLine,
            cellphone: req.body.cellphone,
            email: req.body.email,
            password: req.body.password,
            workstation: req.body.workstation,
            sucursales_sucursalCode: req.body.sucursales_sucursalCode,
            sucursales_mainAgency_idAgencyCode: req.body.sucursales_mainAgency_idAgencyCode
        };

        console.log(employeed);
        tm.saveUser(employeed, (err) => {
            if (!err) {
                res.redirect('/');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    addUser(req, res, next) {
        res.render('addUserTest');
    }

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';

        res.render('error', { error: err });
    }
}

module.exports = TeamController;