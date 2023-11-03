const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = (req, res) => {
  
  db.Product.findAll({where:{
    category_id : req.params.id
  },include:['product_image','product_category']})
    .then((products) => {
        return res.render('searchCategory',{
          products, id : products[0].product_category.name,addPuntos
        })
    }).catch((errors) => console.log(errors));












  ////////////////////////////////////
  db.Category.findAll({where:{
    name: {
      [db.Sequelize.Op.like]: `%${req.params.id.toLowerCase()}%`
    }
  },include:['product_category']})
    .then((categories) => {
        return res.render('searchCategory',{
          categories, id: req.params.id
        })
    }).catch((errors) => console.log(errors));

};
