const {readJSON,writeJSON} = require("../../data/index");

module.exports = (req,res) => {
    
    const products = readJSON('products.json');
    const productsModify = products.map(product => {
        if(product.id == req.params.id){
            
            product.name = req.body.name
            product.description = req.body.description
            product.price = req.body.price
            product.category = req.body.category
        }
        return product
    })
    writeJSON(productsModify, 'products.json') 
    return res.redirect("/admin")
    
}