const { readJSON } = require("../data");
const { detail } = require("./productController");
const categories = readJSON('../data/categories.json');
const productos = readJSON("productos.json")


module.exports = {
    productCart : (req,res) => {
        return res.render('productCart')
    },
    productDetail : (req,res) => {
        return res.render('productDetail',detail)
    },
    register : (req,res) => {
        return res.render('register')
    },
    login : (req,res) => {
        return res.render('login')
    },
    productEdit : (req,res) => {
        return res.render('productEdit',{productos});
    },
    productErase : (req,res) => {
        return res.render('productErase',{productos})
    },
    notFound : (req,res) => {
        return res.render('404')
    }
}