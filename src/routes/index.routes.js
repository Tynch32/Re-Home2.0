var express = require('express');
const router = express.Router();

//Controller
const indexController = require('../controllers/indexController');
//Middlewares
const adminCheck = require('../middlewares/adminCheck');

//Vista al index
router.get('/', indexController.index);
router.get('/products', indexController.index);

//Vista SOLO para los admin
router.get('/admin',adminCheck, indexController.admin)

module.exports = router;
