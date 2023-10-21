const path = require('path');
const db = require('../database/models');
const moment = require('moment');
const images_product = require('../database/models/images_product');

module.exports = {
    index : (req,res) => {
        db.Product.findAll()
            .then(products => {
                db.Images_product.findAll().then(images_product=>{
                    return res.render('index', {products,images_product})
                }
                ).catch(errors=> console.log(errors))
            }).catch(errors=> console.log(errors))
    },
    admin : (req,res)  => {
        db.Product.findAll().then(products => {
            db.Category.findAll().then(categories=>{
                db.User.findAll().then(users=>{
                    db.Images_product.findAll().then(images_product=>{
                        return res.render('admin', {products,categories,users,images_product})
                    }).catch(errors=> console.log(errors))
                }).catch(errors=> console.log(errors))
            }).catch(errors=> console.log(errors))
        }).catch(errors=> console.log(errors))
    }
}