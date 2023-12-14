const router = require('express').Router();
const {index,show,productsByCategory} = require('../../controllers/api/apiProductController');

/* /api/v1/movies */

router.get('/', index);
router.get('/:id', show);
router.get('/category/:id',productsByCategory);


module.exports = router;