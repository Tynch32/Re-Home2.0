const express = require('express');
const { register, processRegister, login, processLogin, profile, update, logout, productCart } = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const userEditValidator = require('../validations/userEditValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');
const router = express.Router();
const uploadUser = require("../middlewares/uploadUser");

/* ----Users---- */
//Register
router.get('/register', notUserCheck, register);
router.post('/register',uploadUser.single("image"),registerValidator,processRegister);//Funcionando
//Login
router.get('/login',notUserCheck, login);
router.post('/login',loginValidator, processLogin);//Funcionando
//Editar perfil
router.get('/profile',userCheck, profile);
router.put('/update/:id',uploadUser.single("image"),userEditValidator,update);//Actualizar
router.get("/productCart",productCart);
//Deslogear
router.get('/logout',logout);

module.exports = router;
