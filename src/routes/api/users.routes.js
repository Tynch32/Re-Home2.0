const router = require('express').Router();
const {index,show} = require('../../controllers/api/apiUserController');

/* /api/v1/movies */

router.get('/', index);
router.get('/:id', show);

module.exports = router;