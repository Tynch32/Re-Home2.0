//Express
const express = require("express");
//Controller
const {detail,add,create,edit,update,remove,search,addToCart} = require("../controllers/productsController");
//Middlewares y validations
const productAddValidator = require("../validations/productAddValidator");
const upload = require("../middlewares/upload");
const productsEditValidator = require("../validations/productsEditValidator");
const adminCheck = require("../middlewares/adminCheck");
const router = express.Router();

//Detalles del producto
router.get("/detail/:id", detail);
//Crear nuevo producto
router.get("/add",adminCheck, add);
router.post("/add",upload.fields([{name: "image"},{name: "images"}]),productAddValidator,create);
//Actualizar producto
router.get("/edit/:id",adminCheck, edit);
router.put("/update/:id",upload.fields([{name: "image"},{name: "images"}]),productsEditValidator,update);
//Borrar producto
router.delete("/remove/:id",adminCheck, remove);
//Buscar un producto
router.get('/search',search);
//Añadir producto al carrito de compras
router.post('/addToCart/:id',addToCart);//agregar uso de ruta en html

//Export
module.exports = router;
