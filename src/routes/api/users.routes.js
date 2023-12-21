const router = require('express').Router();
const {index,show, cant, changeRol} = require('../../controllers/api/apiUserController');

/* /api/v1/movies */

router.get('/', index);
router.get('/cant',cant);
router.get('/:id', show);
router.put('/:id', changeRol)


module.exports = router;