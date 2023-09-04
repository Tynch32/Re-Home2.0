const { readJSON } = require("../data");
const { detail } = require("./productController");
const categories = readJSON('../data/categories.json');

module.exports = {
    productCart: (req, res) => {
        return res.render('productCart')
    },
    register: (req, res) => {
        return res.render('register')
    },
    login: (req, res) => {
        return res.render('login')
    },
    productEdit: (req, res) => {
        const products = readJSON("products.json")
        const selectedProduct = products.find( producto => producto.id == req.params.id)
        res.render('productEdit', { categories:categories,productEdit:selectedProduct });
    },
    notFound: (req, res) => {
        return res.render('404');
    }
    
}