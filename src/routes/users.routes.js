var express = require('express');
var router = express.Router();

//Controller
const userController = require('../controllers/userController');

//Middlewares
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

/* -----Usuario SIN LOGEAR----- */

//Login
router.get('/login', notUserCheck, userController.login);
router.post('/login', loginValidator, userController.processLogin);
//Registro
router.get('/register', notUserCheck, userController.register);
router.post('/register', registerValidator, userController.processRegister);

/* -----Usuario LOGEADO----- */

//Editar perfil
router.get('/editProfile', userCheck, userController.profile);
//Ver carrito de compras
router.get('/productCart', userController.productCart);
//Desloguear
router.get('/logout', userController.logout);


//Export
module.exports = router;
