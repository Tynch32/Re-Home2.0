const {readJSON} = require("../../data/index");

module.exports = (req,res) => {

    const categories = readJSON('../data/categories.json');
    const products = readJSON("products.json")
    const selectedProduct = products.find( producto => producto.id == req.params.id)
    return res.render('productEdit', { categories:categories,productEdit:selectedProduct });
    
}