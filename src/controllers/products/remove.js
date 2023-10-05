const { readJSON, writeJSON } = require("../../data")
const { unlinkSync, existsSync } = require("fs");


module.exports = (req,res) => {
    const products = readJSON('products.json');
    const product =  products.find(product => product.id == req.params.id);
    if (product.id == req.params.id) {
        existsSync(`./public/img/products/${product.image}`) &&
        unlinkSync(`./public/img/products/${product.image}`);
    }
    const productsModify = products.filter(product => product.id !== req.params.id);
    writeJSON(productsModify, 'products.json');
    return res.redirect('/admin')
}