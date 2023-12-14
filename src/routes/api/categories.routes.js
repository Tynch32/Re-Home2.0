const router = require('express').Router();
const {productsByCategory,getCategories} = require('../../controllers/api/apiCategoryController');

router.get('/',getCategories);
router.get('/:id',productsByCategory);

module.exports = router;