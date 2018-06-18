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
        let productCode = req.params.productCode; 
        console.log(productCode);

        tm.getCar(productCode, (err, data) => {
            if (!err) {
                res.render('product-detail', { 
                    title: 'Product detail',
                    data: data,
                    productCode: req.params.productCode
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

    saveEmployee(req, res, next) {
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
                req.flash('info', 'Employee registered correctly');
                res.redirect('/employees');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    getAllReports(req, res, next) {
        tm.getAllReports((err, data) => {
            if (!err) {
                res.render('salesReporting', {
                    title: 'Sales reporting',
                    data: data
                }); 
            }
        })
    }

    getAllCars(req, res, next) {
        tm.getAllCars((err, data) => {
            if (!err) {
                res.render('allCars', {
                    title: 'Manage vehicles',
                    message: req.flash('info'), authmessage : req.flash('authmessage'),
                    data: data
                }); 
            }
        })
    } 

    getCarsSucursal(req, res, next) {
        let sucursalCode = req.params.sucursalCode; 
        console.log(sucursalCode);

        tm.getCarsSucursal(sucursalCode, (err, data) => {
            if (!err) {
                res.render('carsSucursal', {    
                    title: 'Manage vehicles',
                    data: data 
                });
            }
        })
    }


    getSucursales(req, res, next) {
        tm.getSucursales((err, data) => {
            if (!err) {
                res.render('sucursales', {
                    title: 'Subsidiaries',
                    message: req.flash('info'), authmessage : req.flash('authmessage'),
                    data: data
                }); 
            }
        })
    }

    getEmployees(req, res, next) {
        tm.getEmployees((err, data) => {
            if (!err) {
                res.render('employees', {
                    title: 'Employees',
                    message: req.flash('info'), authmessage : req.flash('authmessage'),
                    data: data
                }); 
            }
        })
    }

    saveOrder(req, res, next) {
        let order = {
            idOrderNumber: (req.body.idOrderNumber || 0),
            customer: req.body.customer, 
            orderDate: req.body.orderDate,
            comments: req.body.comments,
            quantityOrdered: req.body.quantityOrdered,
            priceEach: req.body.priceEach,
            total: req.body.total,
            employees_idEmployeed: 1,
            employees_sucursales_sucursalCode: 1,
            employees_sucursales_mainAgency_idAgencyCode: 1
            // employees_idEmployeed: req.body.employees_idEmployeed,
            // employees_sucursales_sucursalCode: req.body.employees_sucursales_sucursalCode,
            // employees_sucursales_mainAgency_idAgencyCode: req.body.employees_sucursales_mainAgency_idAgencyCode
        };

        console.log(order);
        tm.saveOrder(order, (err) => {
            if (!err) {
                req.flash('info', 'Order saved correctly.');
                res.redirect('/');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
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

    saveSucursal(req, res, next) {
        let sucursal = {
            sucursalCode: (req.body.sucursalCode || 0),
            sucursalName: req.body.sucursalName, 
            quantityInStock: req.body.quantityInStock,
            adressLine: req.body.adressLine,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            mainAgency_idAgencyCode: req.body.mainAgency_idAgencyCode
        };

        console.log(sucursal);
        tm.saveSucursal(sucursal, (err) => {
            if (!err) {
                req.flash('info', 'Subsidaries added correctly.');
                res.redirect('/sucursales');
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

    getOneSucursal(req, res, next) {
        let sucursalCode = req.params.sucursalCode; 
        console.log(sucursalCode);

        tm.getSucursal(sucursalCode, (err, data) => {
            if (!err) {
                res.render('editSucursal', { 
                    title: 'Edit subsidiaries',
                    data: data
                });
            }
        }) 
    }

    getOneEmployee(req, res, next) {
        let idEmployeed = req.params.idEmployeed; 
        console.log(idEmployeed);

        tm.getEmployee(idEmployeed, (err, data) => {
            if (!err) {
                res.render('editEmployee', { 
                    title: 'Edit employee',
                    data: data
                });
            }
        }) 
    }

    addNewCar(req, res, next) { 
        res.render('formularioCar', {
            title: 'Add new car'
        });
    }

    addSucursal(req, res, next) { 
        res.render('addSucursal', {
            title: 'Add new subsidiaries'
        });
    }

    addEmployee(req, res, next) { 
        res.render('addEmployee', {
            title: 'Add new employee'
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

    deleteSucursal(req, res, next) {

        let id = req.params.id; 
        console.log(id)
        tm.deleteSucursal(id, (err, data) => {
            if (!err) {
                res.redirect('/sucursales')
            } else {
                return next(new Error('Sucursales not found'))
            }
        }); 
    }

    deleteEmployee(req, res, next) {

        let id = req.params.id; 
        console.log(id)
        tm.deleteEmployee(id, (err, data) => {
            if (!err) {
                res.redirect('/employees')
            } else {
                return next(new Error('Employees not found'))
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