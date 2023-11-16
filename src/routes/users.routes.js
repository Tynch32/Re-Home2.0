//Express
const express = require('express');
const router = express.Router();
//User Controllers
const { register, processRegister, login, processLogin, profile, update, logout, productCart,faq } = require('../controllers/usersController');
//Middlewares
const userCheck = require('../middlewares/userCheck');
const notUserCheck = require('../middlewares/notUserCheck');
const cookieCheck= require('../middlewares/cookieCheck');
const uploadUser = require("../middlewares/uploadUser");
const userSessionCheck = require("../middlewares/userSessionCheck");
//Validations
const registerValidator = require('../validations/registerValidator');
const userEditValidator = require('../validations/userEditValidator');
const loginValidator = require('../validations/loginValidator');

/* ----Users---- */

//Register
router.get('/register', notUserCheck, register);
router.post('/register',uploadUser.single("image"),registerValidator,processRegister,);
//Login
router.get('/login',notUserCheck, login);
router.post('/login',loginValidator,processLogin);
//Edit profile
router.get('/profile',cookieCheck,userCheck, profile);
router.put('/update/:id',cookieCheck,userCheck,uploadUser.single("image"),userEditValidator,update);
//Product cart
router.get("/productCart/:id",cookieCheck,userCheck,productCart);
//Logout
router.get('/logout',logout);
//Informacion del sitio
router.get('/faq',faq)

module.exports = router;
