const router = require('express').Router();
const {productsByCategory,getCategories,getAllCategories,cantCategories} = require('../../controllers/api/apiCategoryController');

router.get('/',getCategories);
router.get('/all',getAllCategories);
router.get('/cant', cantCategories)
router.get('/:id',productsByCategory);

module.exports = router;