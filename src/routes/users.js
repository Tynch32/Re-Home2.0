var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/productCart', userController.register);
router.get('/productDetail', userController.login);
router.get('/productAdd', userController.productAdd);
router.get('/productEdit', userController.productEdit);
router.get('/register', userController.login);
router.get('/login', userController.login);
router.get('/*', userController.notFound);



module.exports = router;
