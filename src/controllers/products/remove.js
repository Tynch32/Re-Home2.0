const {readJSON,writeJSON} = require("../../data/index");


module.exports = (req,res) => {

    const productos = readJSON("products.json")
    const params= req.params.id
    const productsModify = productos.filter( producto => producto.id != params)
    writeJSON(productsModify,"products.json")
    return res.redirect("/") 
    
}



