const { readJSON } = require("../data/index");
const products = readJSON('products.json');

module.exports = {
    index: (req, res) => {
        return res.render('index', {products});
    },
    admin : (req,res) => {
        console.log(products)
        return res.render('admin',{products})
    }
}