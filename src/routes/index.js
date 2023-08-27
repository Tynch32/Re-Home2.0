var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/admin', indexController.admin);

module.exports = router;
