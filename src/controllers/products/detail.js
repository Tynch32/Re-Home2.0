const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = async (req,res) => {
    db.Product.findByPk(req.params.id,{include:['product_image','product_category']}).then(product =>{
        return res.render('productDetail',{product,addPuntos})
    }).catch(error=>console.log(error));

}