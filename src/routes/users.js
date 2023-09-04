var express = require('express');
const userController = require('../controllers/userController');
const remove = require('../controllers/products/remove');
var router = express.Router();

/* GET users listing. */
router.get('/productCart', userController.productCart);
router.get('/productDetail', userController.productDetail);
router.get('/productAdd', userController.productAdd);
router.get("/productErase",userController.productErase)
router.get('/productEdit', userController.productEdit);
router.get('/register', userController.register);
router.get('/login', userController.login);
router.get('/results', userController.searchResult);
router.get('/*', userController.notFound);



module.exports = router;
