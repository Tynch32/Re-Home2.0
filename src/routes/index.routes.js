//Express
const express = require('express');
const router = express.Router();
//Controller
const { index, admin, cookieContract} = require('../controllers/indexController');
//Middlewares
const adminCheck = require('../middlewares/adminCheck');

//Vista visitante
router.get('/', index);

//Cookie contract
router.post('/', cookieContract);

//vista admin
router.get('/admin', adminCheck, admin);

//Export
module.exports = router;
