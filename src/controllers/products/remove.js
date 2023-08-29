const { readJSON, writeJSON } = require("../../data")


module.exports = (req,res) => {

    const productos = readJSON("products.json")
     const params= req.params.id
     //console.log(params)
    const productsModify = productos.filter( producto => producto.id != params)
    //console.log(productsModify)
    writeJSON(productsModify,"products.json")

    return res.redirect("/") 

}



