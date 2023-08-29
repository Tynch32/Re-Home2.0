var express = require('express');
const userController = require('../controllers/userController');
const search = require('../controllers/products/search');
var router = express.Router();

/* GET users listing. */
router.get('/productCart', userController.productCart);
router.get('/productDetail', userController.productDetail);
router.get('/productAdd', userController.productAdd);
router.get('/productEdit', userController.productEdit);
router.get('/register', userController.register);
router.get('/login', userController.login);
// router.get('/results', search);
router.get('/results', userController.searchResult);
router.get('/*', userController.notFound);


module.exports = router;
