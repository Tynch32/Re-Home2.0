const { readJSON, writeJSON } = require("../../data")


module.exports = (req,res) => {

    const productos = readJSON("productos.json")
     const params= parseInt(req.params.id)
    
    const productsModify = productos.filter( producto => producto.id != params)
    
    writeJSON(productsModify,"productos.json")

    return res.redirect("/") 

}



