const db = require("../../database/models");
const moment = require('moment');
const addPuntos = require('../../middlewares/addPuntos')

module.exports = (req, res) => {
    db.Product.findAll({
      include:['product_image','product_category']
    }).then((products) => {
        db.User.findAll({include:['roleId']})
        .then((users) => {
          db.Category.findAll({
            order:[['name', 'ASC']],
            include:['product_category']})
          .then((categories) => {
            return res.render("admin", {products,users,categories,moment,addPuntos});
          }).catch((errors)=>console.log(errors));
        }).catch((errors)=>console.log(errors));
      }).catch((errors)=>console.log(errors));
}
