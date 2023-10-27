const db = require("../../database/models");

module.exports = async (req,res) => {
    db.Product.findByPk(req.params.id,{include:['product_image','product_category']}).then(product =>{
        return res.render('productDetail',{product})
    }).catch(error=>console.log(error));

}