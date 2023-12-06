//Express
const express = require('express');
const router = express.Router();
//Controller
const { index, admin, cookieContract, userChangeRol} = require('../controllers/indexController');
//Middlewares
const adminCheck = require('../middlewares/adminCheck');

//Vista visitante
router.get('/', index);

//Cookie contract
router.post('/', cookieContract);

//vista admin
router.get('/admin', adminCheck, admin);
//CambiarRolUsuario
router.put('/admin/changeRol/:id',adminCheck,userChangeRol);

//Export
module.exports = router;
