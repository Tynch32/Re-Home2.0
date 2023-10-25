const {unlinkSync, existsSync} = require('fs');
const {validationResult} = require('express-validator');
const db = require("../../database/models");

module.exports = async (req,res) => {
    const errors = validationResult(req);
    
    if(errors.isEmpty()){
        await db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount?req.body.discount:0,
            description: req.body.description,
            category_id: req.body.category
        })
        await db.Product.findOne({
            attributes: [[db.Sequelize.fn('max', db.Sequelize.col('id')), 'max_id']],
            }).then(result => {
            let maxId = result.get('max_id');
                db.Images_product.create({
                    file: req.files.image[0].filename,
                    product_id: maxId
                })
                if(req.files.images) {
                    req.files.images.forEach(async file => {
                        await db.Images_product.create({
                            file: file.filename,
                            product_id: maxId
                        })
                    })
                }
                return res.redirect('/admin')
            })
        
    }else{
        
        (req.files.image && existsSync(`./public/img/products/${req.files.image[0].filename }`)) && unlinkSync(`./public/img/products/${req.files.image[0].filename }`);

        if(req.files.images) {
            req.files.images.forEach(file => {
                existsSync(`./public/img/products/${file.filename}`) && unlinkSync(`./public/img/products/${file.filename}`)
            })
        }
        db.Category.findAll({
            order: [
                ['name', 'ASC']
            ]
        }).then(categories=> {
            return res.render('productAdd',{
                categories,
                errors : errors.mapped(),
                old : req.body
            });
        })
    }
}