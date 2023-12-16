const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = (req,res) => {
    db.Product.findByPk(req.params.id,{include:['product_image','product_category']}).then(product =>{
        db.Product.findAll({
            where:{
                category_id:product.category_id,
                id:{
                    [db.Sequelize.Op.not]:product.id
                }
            },
            limit: 3,
            include:['product_image']
        }).then(relationProduct=>{
             console.log(relationProduct);
             return res.render('productDetail',{product,relationProduct,addPuntos})
        })
    }).catch(error=>console.log(error));

}