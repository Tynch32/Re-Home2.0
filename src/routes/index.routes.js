//Express
const express = require('express');
const router = express.Router();
//Controller
const { index, admin } = require('../controllers/indexController');
//Middlewares
const adminCheck = require('../middlewares/adminCheck');

//Vista visitante
router.get('/', index);
//vista admin
router.get('/admin', adminCheck, admin);

//Export
module.exports = router;
