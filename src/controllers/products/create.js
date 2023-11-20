const {unlinkSync, existsSync} = require('fs');
const {validationResult} = require('express-validator');
const db = require("../../database/models");

module.exports = async (req,res) => {
    const errors = validationResult(req);
    console.log(req.files.image);
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
                if(req.files.image) {
                    req.files.image.forEach(async file => {
                        await db.Images_product.create({
                            file: file.filename,
                            product_id: maxId
                        })
                    })
                }
                return res.redirect('/admin')
            })
    }else{

        if(req.files.image) {
            req.files.image.forEach(file => {
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