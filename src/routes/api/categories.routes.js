const router = require('express').Router();
const {productsByCategory,getCategories,getAllCategories} = require('../../controllers/api/apiCategoryController');

router.get('/',getCategories);
router.get('/all',getAllCategories);
router.get('/:id',productsByCategory);

module.exports = router;