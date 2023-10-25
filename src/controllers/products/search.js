const db = require("../../database/models");

module.exports = (req, res) => {
  
  db.Product.findAll({where:{
    name: {
      [db.Sequelize.Op.like]: `%${req.query.keywords.toLowerCase()}%`
    }
  }})
    .then((results) => {
      db.Images_product.findAll().then((images)=>{
        return res.render('search',{
          results,images,
          keywords : req.query.keywords
        })
      }).catch((errors)=>console.log(errors));
    }).catch((errors) => console.log(errors));

};
