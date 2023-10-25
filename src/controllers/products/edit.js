const db = require("../../database/models");

module.exports = (req,res) => {

    db.Category.findAll()
        .then((categories) => {
            db.Product.findByPk(req.params.id).then((product)=>{
                db.Images_product.findAll({where:{
                    product_id: req.params.id
                }}).then(images=>{
                    db.Category.findByPk(product.category_id).then(category=>{
                        console.log(category.dataValues.name)
                        return res.render('productEdit',{
                    categories,
                    ...product.dataValues,
                    images,category
                    })
                    
                    })
                })
            }).catch(error=>console.log(error))
    }).catch(error=>console.log(error))
}