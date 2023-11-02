const db = require("../database/models");
const moment = require('moment');

module.exports = {
  index: (req, res) => {
    db.Product.findAll({include:['product_image','product_category']})
      .then((products) => {
          let cookie= req.cookies.grupoReHome10_cookie;
          let categories = [];
          products.forEach(product => {if(!categories.includes(product.product_category.name)){categories.push(product.product_category.name)}});
      return res.render("index", {products,cookie,categories});
    }).catch((errors)=>console.log(errors));
  },
  admin: (req, res) => {
    db.Product.findAll({
      include:['product_image','product_category']
    }).then((products) => {
        db.User.findAll({include:['roleId']})
        .then((users) => {
          db.Category.findAll({include:['product_category']})
          .then((categories) => {
            return res.render("admin", {products,users,categories,moment});
          }).catch((errors)=>console.log(errors));
        }).catch((errors)=>console.log(errors));
      }).catch((errors)=>console.log(errors));
  },
  cookieContract: (req, res) => {
    let valueCookie=true;
    res.cookie('grupoReHome10_cookie',valueCookie,{
      maxAge : 1000 * 60 * 60})
    return res.redirect('/');
  }
};
