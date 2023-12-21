const router = require('express').Router();
const {index,show,productsByCategory,getCategories,cantProducts,ultimoProducto,destroyProduct,update,topSales} = require('../../controllers/api/apiProductController');

/* /api/v1/movies */

router.get('/', index);
router.get('/cant', cantProducts);
router.get('/last', ultimoProducto);
router.get('/topsales',topSales)
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id',destroyProduct);


module.exports = router;