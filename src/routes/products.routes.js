//Express
const express = require("express");
const router = express.Router();
//Products Controller
const {detail,add,create,edit,update,remove,search,addToCart} = require("../controllers/productsController");
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
router.post("/add",upload.fields([{name: "image"},{name: "images"}]),productAddValidator,create);
//Update product
router.get("/edit/:id",adminCheck, edit);
router.put("/update/:id",upload.fields([{name: "image"},{name: "images"}]),productsEditValidator,update);
//Delete product
router.delete("/remove/:id",adminCheck, remove);
//Search product
router.get('/search',search);
//Add product to cart
router.post('/addToCart/:id',cookieCheck,userCheck,addToCart);

//Export
module.exports = router;
