const db = require("../../database/models");

module.exports = (req,res) => {

    db.Product.findByPk(req.params.id,{include:['product_category','product_image']})
        .then((product)=>{
            db.Category.findAll({order: [
                ['name', 'ASC']
            ]}).then(categories=>{
                return res.render('productEdit',{categories,product})
            }).catch(error=>console.log(error)) 
    }).catch(error=>console.log(error))
    
}