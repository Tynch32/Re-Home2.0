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
    notFound: (req, res) => {
        return res.render('404');
    }
    
}