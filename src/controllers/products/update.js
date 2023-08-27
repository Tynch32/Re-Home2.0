const { readJSON, writeJSON } = require("../../data");

module.exports = (req,res) => {
    const {name, price, category, description} = req.body;
    const products = readJSON('products.json');

    const productsModify = products.map(product => {
        if(product.id === req.params.id){
            product.name = name.trim()
            product.description = description.trim()
            product.price = +price
            product.category = category
        }
        return product
    })
    
    writeJSON(productsModify, 'products.json')
    
    return res.redirect('/admin')
}