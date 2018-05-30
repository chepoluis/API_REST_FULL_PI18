const TeamControler = require('../controllers/team_controller'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamControler(); //Instancia en la clase

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
 
    .post('/', tc.save)

    .put('/actualizar/:id', tc.save)

    .delete('/eliminar/:id', tc.delete)

    .use(tc.error404);

module.exports = router;