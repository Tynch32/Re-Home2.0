const express = require('express');
const productController = require('../controllers/productController');
const upload = require('../middlewares/upload');
const router  = express.Router();

//Crear Nuevo Producto
router.get('/create', productController.add); 
router.post('/create',upload.single('image'),productController.create);

//Ver Detalles Del Producto
router.get('/detail/:id',productController.detail);

//Editar Producto
router.get('/edit/:id',productController.edit);
router.put('/edit/:id',productController.update);

//Eliminar Producto
router.delete('/:id',productController.remove);

//Buscar un producto
router.get('/results',productController.search);

//Export
module.exports = router;