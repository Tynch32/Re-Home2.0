const db = require('../database/models');
const sequelize = db.sequelize;


module.exports = {
    index : (req,res) => {   
        db.Product.findAll()
            .then(products => {
                res.render('index', {products})
            })
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