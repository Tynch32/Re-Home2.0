const express = require('express');
const router  = express.Router();
const {detail,add, create, edit, update, remove} = require('../controllers/productController');
const upload = require('../middlewares/upload');
/* /products */

router.get('/detail/:id', productController.detail);
router.get('/add', productController.add);
router.post('/add',upload.single('image'),create);
router.get('/edit/:id',productController.edit);
router.put('/update/:id',productController.update);
// router.delete('/remove/:id',productController.remove);
    
module.exports = router;