const express = require('express');
const router  = express.Router();

//Controller
const productController = require('../controllers/productController');
//Middlewares
const upload = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck');

/* -----SOLO Acceso ADMINISTRADOR----- */
//Crear Nuevo Producto
router.get('/create',adminCheck, productController.add); 
router.post('/create',adminCheck, upload.single('image'),productController.create);

//Editar Producto
router.get('/edit/:id',adminCheck,productController.edit);
router.put('/edit/:id',adminCheck,upload.single('image'),productController.update);

//Eliminar Producto
router.delete('/:id',adminCheck,productController.remove);

/* -----     Acceso TODOS     -----*/
//Ver Detalles Del Producto
router.get('/detail/:id',productController.detail);
//Buscar un producto
router.get('/results',productController.search);

//Export
module.exports = router;