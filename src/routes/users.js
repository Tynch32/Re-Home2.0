var express = require('express');
const userController = require('../controllers/userController');
const add = require("../controllers/products/add")
const create = require("../controllers/products/create");
const upload = require('../middlewares/upload');
const remove = require("../controllers/products/remove")
var router = express.Router();

/* GET users listing. */
router.get('/productCart', userController.productCart);
router.get('/productDetail', userController.productDetail);
router.get('/productAdd', add);
router.post('/productAdd',upload.single('image'),create);
router.get("/productErase",remove)
router.get('/productEdit', userController.productEdit);
router.get('/register', userController.register);
router.get('/login', userController.login);
router.get('/*', userController.notFound);



module.exports = router;
