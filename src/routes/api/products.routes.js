const router = require('express').Router();
const {index,show,productsByCategory,getCategories,cantProducts,ultimoProducto} = require('../../controllers/api/apiProductController');

/* /api/v1/movies */

router.get('/', index);
router.get('/cant', cantProducts);
router.get('/last', ultimoProducto);
router.get('/:id', show);


module.exports = router;