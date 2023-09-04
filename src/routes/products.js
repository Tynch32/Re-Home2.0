const express = require('express');
const {detail,add,remove, create, edit, update,search} = require('../controllers/productController');
const upload = require('../middlewares/upload');
const router  = express.Router();

router.get('/results', search);
router.get('/create',add );//lleva a la vista  
router.post('/',upload.single('image'),create);//crea el producto y sube la imagen
router.get('/:id',detail)
router.put('/update/:id',update);
router.delete('/:id',remove);
    
module.exports = router;