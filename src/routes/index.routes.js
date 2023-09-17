var express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();
const adminCheck = require('../middlewares/adminCheck');

/* GET home page. */
router.get('/', indexController.index);
router.get('/products', indexController.index);

//Vista solo para los admin
router.get('/admin',adminCheck, indexController.admin)

module.exports = router;
