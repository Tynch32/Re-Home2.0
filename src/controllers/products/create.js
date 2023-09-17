const {readJSON,writeJSON} = require("../../data/index");
const Product = require("../../data/Product");

module.exports=(req,res)=>{
    
    const productosDatabse = readJSON("products.json")
    const productoNuevo = new Product(req.body)
    productoNuevo.image = req.file.originalname
    productosDatabse.push(productoNuevo)
    console.log(req.body)
    writeJSON(productosDatabse,"products.json")
    return res.send(req.file)

}