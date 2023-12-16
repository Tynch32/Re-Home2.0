const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = (req,res) => {

    db.Product.findAll({
        order: [['category_id', 'ASC']],
        include: ['product_image', 'product_category'],
        where: {
            discount: {
                [db.Sequelize.Op.gt]: 0,
              } 
        }
    }).then((products)=>{
            db.Category.findAll({order: [
                ['name', 'ASC']
            ]}).then(categories=>{
                let cookie = req.cookies.grupoReHome10_cookie;
                return res.render('productsOferta',{categories,products,addPuntos,cookie})
            }).catch(error=>console.log(error)) 
    }).catch(error=>console.log(error))
    
}