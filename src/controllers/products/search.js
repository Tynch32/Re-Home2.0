const db = require("../../database/models");

module.exports = (req, res) => {
  
  db.Product.findAll({where:{
    name: {
      [db.Sequelize.Op.like]: `%${req.query.keywords.toLowerCase()}%`
    }
  },include:['product_image','product_category']})
    .then((results) => {
        return res.render('search',{
          results, keywords : req.query.keywords
        })
    }).catch((errors) => console.log(errors));

};
