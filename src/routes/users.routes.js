var express = require('express');
const userController = require('../controllers/userController');


var router = express.Router();

/* GET users listing. */

router.get('/productCart',userController.productCart);
router.get('/register',userController.register);
router.get('/login',userController.login);
router.get('/*',userController.notFound);

module.exports = router;
