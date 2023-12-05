const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = async (req, res) => {
  let categories = await db.Category.findAll({
    order:[['name', 'ASC']]
  }).catch((errors) => console.log(errors));
  let products = await db.Product.findAll({where:{
    category_id : req.params.id
  },include:['product_image','product_category']
  }).catch((errors) => console.log(errors));
  if (products?.length > 0) { 
    return res.render('searchCategory',{products, id : products[0].product_category.name,addPuntos,categories})
  }else{
    return res.render('searchCategory',{categories, id: "Sin productos en esta categoría", products: null})
  }











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
