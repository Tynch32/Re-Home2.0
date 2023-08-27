const { readJSON } = require("../data");
const { detail } = require("./productController");
const categories = readJSON('../data/categories.json');

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
    productAdd : (req,res) => {
        return res.render('productAdd',categories);
    },
    productEdit : (req,res) => {
        return res.render('productEdit',categories);
    },
    notFound : (req,res) => {
        return res.render('404')
    }
}