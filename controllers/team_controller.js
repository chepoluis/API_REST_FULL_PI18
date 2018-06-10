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
        res.render('index', {
            isAuthenticated : req.isAuthenticated(),
            user : req.user
        });
    }

    shop(req, res, next) {

        tm.getAllCars((err, data) => {
            if (!err) {
                res.render('product', {
                    title: 'Cars',
                    isAuthenticated : req.isAuthenticated(),
                    user : req.user,
                    data: data
                }); 
            }
        })
    }

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
        tm.getAllCars((err, data) => {
            if (!err) {
                res.render('product-detail', {
                    title: 'Product detail',
                    data: data,
                    isAuthenticated : req.isAuthenticated(),
                    user : req.user
                }); 
            }
        })
    }

    prueba(req, res, next) {
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

    
    signup(req, res, next) { 
        res.render('users/signup', {
            title: 'Sign up'
        });
    }

    login(req, res, next) {
        res.render('users/login', {
            message: req.flash('info'), authmessage : req.flash('authmessage'),
            title: 'Log in'
        });
    }

    // Cerrar sesion
    logout(req, res, next) {
        req.logout();
        // El que redirecciona es el res no el req
        res.redirect('/');
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
                req.flash('info', 'User registered correctly, now you can sign in.');
                res.redirect('/login');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    getAllCars(req, res, next) {
        tm.getAllCars((err, data) => {
            if (!err) {
                res.render('allCars', {
                    title: 'Manage vehicles',
                    data: data
                }); 
            }
        })
    }

    saveNewCar(req, res, next) {
        let car = {
            productCode: (req.body.productCode || 0),
            model: req.body.model, 
            year: req.body.year,
            color: req.body.color,
            transmmission: req.body.transmmission,
            cylinders: req.body.cylinders,
            price: req.body.price,
            sucursales_sucursalCode: req.body.sucursales_sucursalCode,
            sucursales_mainAgency_idAgencyCode: req.body.sucursales_mainAgency_idAgencyCode
        };

        console.log(car);
        tm.saveCar(car, (err) => {
            if (!err) {
                req.flash('info', 'Car added correctly.');
                res.redirect('/managevehicles');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    getOneCar(req, res, next) {
        // res.render('editCar', { 
        //     title: 'Add new car'
        // });
        let productCode = req.params.productCode; 
        console.log(productCode);

        tm.getCar(productCode, (err, data) => {
            if (!err) {
                res.render('editCar', { 
                    title: 'Edit car',
                    data: data,
                    productCode: req.params.productCode
                });
            }
        }) 

    }

    addNewCar(req, res, next) { 
        res.render('formularioCar', {
            title: 'Add new car'
        });
    }

    deleteCar(req, res, next) {

        let id = req.params.id; 
        console.log(id)
        tm.deleteCar(id, (err, data) => {
            if (!err) {
                res.redirect('/managevehicles')
            } else {
                return next(new Error('Car not found'))
            }
        }); 
    }

    addUser(req, res, next) {
        res.render('addUserTest');
    }

    getUserPanel(req, res, next) {
        res.render('users/panel', {
            isAuthenticated : req.isAuthenticated(),
            user : req.user
        });
    }  

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';

        res.render('error', { error: err });
    }
}

module.exports = TeamController;