const express = require('express');
const router  = express.Router();
const {detail,remove, create, edit, update,search} = require('../controllers/productController');
const upload = require('../middlewares/upload');
/* /products */

router.get('/detail/:id',detail);
router.get('/result', search);
router.post('/productAdd',upload.single('image'),create);
router.get('/edit/:id',edit);
router.put('/update/:id',update);
router.delete('/remove/:id',remove);
    
module.exports = router;