const { readJSON,writeJSON } = require("../../data")

module.exports = (req,res) => {

    const products = readJSON("products.json")
    const selectedProduct = products.find( producto => producto.id == req.params.id)
    console.log(selectedProduct)
    return res.render('productDetail',{detail:selectedProduct})
    
}