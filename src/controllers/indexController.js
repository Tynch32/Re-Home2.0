const { readJSON } = require("../data");

module.exports = {
    index : (req,res) => {   
        const products = readJSON('products.json');
        return res.render('index', {
            products
        })
    },
    admin : (req,res)  => {
        const products = readJSON('products.json');
        const categories = readJSON('categories.json');
        const users = readJSON('users.json');
        
        return res.render('admin', {
            products,
            users,
            categories,
        })
    }
}