const TeamControler = require('../controllers/team_controller'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamControler(); //Instancia en la clase
let passport = require('passport');
let AuthMiddleware = require('.././middleware/auth');
    

router
    .get('/', tc.index)
    .get('/agregar', tc.addForm)
    .get('/editar/:id', tc.getOne)
    .get('/product', tc.shop) 
    .get('/register', tc.signup)
    .get('/login', tc.login)
    .get('/productdetail', tc.productDetail)
    .get('/blog', tc.blog) 
    .get('/prueba/:id', tc.prueba)
    .get('/adduser', tc.addUser)
    .get('/panel', AuthMiddleware.isLogged, tc.getUserPanel)
    .get('/managevehicles', tc.getAllCars)
    .get('/add', tc.addNewCar)
    .get('/showDataCar/:productCode', tc.getOneCar)

    .get('/logout', tc.logout)
    
    // .post('/', tc.save)
    .post('/registeruser', tc.saveUser)
    .post('/login', passport.authenticate('local', {
        failureRedirect : '/login',
        successRedirect : '/',
        failureFlash : true
    }))
    .post('/savecar', tc.saveNewCar)

    .put('/actualizar/:id', tc.save)
    .put('/updateCar/:id', tc.saveNewCar)

    .delete('/eliminar/:id', tc.delete)
    .delete('/delete/:id', tc.deleteCar)

    .use(tc.error404);

module.exports = router;