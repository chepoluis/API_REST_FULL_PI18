const TeamControler = require('../controllers/team_controller'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamControler(); //Instancia en la clase
let passport = require('passport');
let AuthMiddleware = require('.././middleware/auth');
    

router
    .get('/', tc.index)
    .get('/agregar', AuthMiddleware.isLogged, tc.addForm)
    .get('/editar/:id', AuthMiddleware.isLogged, tc.getOne)
    .get('/product', AuthMiddleware.isLogged, tc.shop) 
    .get('/register', tc.signup)
    .get('/login', tc.login)
    .get('/productdetail/:productCode', tc.productDetail)
    .get('/blog', AuthMiddleware.isLogged, tc.blog) 
    .get('/prueba/:id', AuthMiddleware.isLogged, tc.prueba)
    .get('/adduser', AuthMiddleware.isLogged, tc.addUser)
    .get('/panel', AuthMiddleware.isLogged, tc.getUserPanel)
    .get('/managevehicles', tc.getAllCars)
    .get('/add', AuthMiddleware.isLogged, tc.addNewCar)
    .get('/showDataCar/:productCode', AuthMiddleware.isLogged, tc.getOneCar)
    .get('/showDataSucursal/:sucursalCode', tc.getOneSucursal) 
    .get('/showDataEmployee/:idEmployeed', tc.getOneEmployee) 
    .get('/manageVehiclesSucursal/:sucursalCode', tc.getCarsSucursal)
    .get('/reporting', AuthMiddleware.isLogged, tc.getAllReports)
    .get('/sucursales', tc.getSucursales)
    .get('/addSucursal', tc.addSucursal)
    .get('/addEmployee', tc.addEmployee)
    .get('/employees', tc.getEmployees)

    .get('/logout', tc.logout)
    
    // .post('/', tc.save)
    .post('/registeruser', tc.saveUser)
    .post('/addemployee', tc.saveEmployee)
    .post('/login', passport.authenticate('local', {
        failureRedirect : '/login',
        successRedirect : '/',
        failureFlash : true
    }))
    .post('/savecar', AuthMiddleware.isLogged, tc.saveNewCar)
    .post('/savesucursal', tc.saveSucursal)
    .post('/buy', AuthMiddleware.isLogged, tc.saveOrder)

    .put('/actualizar/:id', AuthMiddleware.isLogged, tc.save)
    .put('/updateCar/:id', AuthMiddleware.isLogged, tc.saveNewCar)
    .put('/updateSucursal/:id', tc.saveSucursal)
    .put('/updateEmployee/:id', tc.saveEmployee)

    .delete('/eliminar/:id', tc.delete)
    .delete('/delete/:id', tc.deleteCar)
    .delete('/deleteSucursal/:id', tc.deleteSucursal)
    .delete('/deleteEmployee/:id', tc.deleteEmployee)

    .use(tc.error404);

module.exports = router;