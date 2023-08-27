const express = require('express');
const productController = require('../controllers/productController');
const router  = express.Router();

/* /products */

// router.get('/detail/:id', productController.detail);
// router.get('/add', productController.add);
// router.post('/add',productController.create);
router.get('/edit/:id',productController.edit);
router.put('/update/:id',productController.update);
// router.delete('/remove/:id',productController.remove);
    
module.exports = router;