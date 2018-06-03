const TeamControler = require('../controllers/team_controller'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamControler(); //Instancia en la clase
let passport = require('passport');
    

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
    // .post('/', tc.save)
    .post('/registeruser', tc.saveUser)
    .post('/login', passport.authenticate('local', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    }))

    .put('/actualizar/:id', tc.save)

    .delete('/eliminar/:id', tc.delete)

    .use(tc.error404);

module.exports = router;