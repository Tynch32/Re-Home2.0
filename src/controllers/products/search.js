const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = async (req, res) => {
  let categories = await db.Category.findAll({
    order:[['name', 'ASC']]
  }).catch((errors) => console.log(errors));
  db.Product.findAll({where:{
    name: {
      [db.Sequelize.Op.like]: `%${req.query.keywords.toLowerCase()}%`
    }
  },include:['product_image','product_category']})
    .then((results) => {
        return res.render('search',{
          results, keywords : req.query.keywords,addPuntos,categories
        })
    }).catch((errors) => console.log(errors));

};
