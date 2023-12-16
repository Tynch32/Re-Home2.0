//Express
const express = require("express");
const router = express.Router();
//Products Controller
const {detail,add,create,edit,update,remove,search,addToCart,removeToCart, searchCategory, oferts} = require("../controllers/productsController");
//Middlewares
const adminCheck = require("../middlewares/adminCheck");
const userCheck = require('../middlewares/userCheck');
const cookieCheck= require('../middlewares/cookieCheck');
const upload = require("../middlewares/upload");
//Validations
const productAddValidator = require("../validations/productAddValidator");
const productsEditValidator = require("../validations/productsEditValidator");

/* ----Products---- */

//Product Detail
router.get("/detail/:id", detail);
//Create product
router.get("/add",adminCheck, add);
router.post("/add",upload.fields([{name: "image"}]),productAddValidator,create);
//Update product
router.get("/edit/:id",adminCheck, edit);
router.put("/update/:id",upload.fields([{name: "image"}]),productsEditValidator,update);
//Delete product
router.delete("/remove/:id",adminCheck, remove);
//Search product
router.get('/search',search);
router.get('/searchCategory/:id',searchCategory);
//ofertas
router.get('/oferts',oferts);


//Add product to cart
router.post('/addToCart/:id',cookieCheck,userCheck,addToCart);
//Remove product to cart
router.post('/removeToCart/:id',cookieCheck,userCheck,removeToCart);

//Export
module.exports = router;
