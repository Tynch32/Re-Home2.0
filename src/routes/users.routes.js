const express = require('express');
const { register, processRegister, login, processLogin, profile, update, logout, productCart } = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');
const router = express.Router();

/* ----Users---- */
//Register
router.get('/register', notUserCheck, register)
router.post('/register',registerValidator, processRegister)
//Login
router.get('/login',notUserCheck, login)
router.post('/login',loginValidator, processLogin)
//Editar perfil
router.get('/profile',userCheck, profile)
router.put('/update/:id', update)
router.get("/productCart",productCart)
//Deslogear
router.get('/logout',logout)

module.exports = router;
