var express = require('express');
const userController = require('../controllers/userController');
const search = require('../controllers/products/search');
const add = require("../controllers/products/add")
const create = require("../controllers/products/create");
const upload = require('../middlewares/upload');
const remove = require('../controllers/products/remove');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/productCart', userController.productCart);
router.get('/productDetail', userController.productDetail);
router.get('/productAdd', add);
router.post('/productAdd',upload.single('image'),create);
router.get("/productErase",userController.productErase)
router.post('/productErase/:id',remove);
router.get('/productEdit', userController.productEdit);
router.get('/register', userController.register);
router.get('/login', userController.login);
// router.get('/results', search);
router.get('/results', userController.searchResult);
router.get('/results', userController.searchResult);
router.get('/*', userController.notFound);


module.exports = router;
