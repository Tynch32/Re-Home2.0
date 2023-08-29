const { readJSON } = require("../data");
const { detail } = require("./productController");
const categories = readJSON('../data/categories.json');
const productos = readJSON("productos.json")


module.exports = {
    productCart: (req, res) => {
        return res.render('productCart')
    },
    productDetail: (req, res) => {
        return res.render('productDetail', { detail })
    },
    register: (req, res) => {
        return res.render('register')
    },
    login: (req, res) => {
        return res.render('login')
    },
    productAdd : (req,res) => {
        return res.render('productAdd',{categories});
    },
    productEdit : (req,res) => {
        return res.render('productEdit',{categories});
    },
    notFound: (req, res) => {
        return res.render('404');
    },
    searchResult: (req, res) => {
        console.log(req.body, "este es el body");
        console.log(req.body.keywords, "key");
        console.log(req.params.keywords, "pa key");
        const productos = readJSON('../data/products.json');
        // const productosFiltrados = productos.filter(product => { (product.name).toLowerCase().includes(req.params.keywords.toLowerCase()) });

        return res.render('results');

    }
}