const db = require("../database/models");
const moment = require('moment');

module.exports = {
  index: (req, res) => {
    db.Product.findAll()
      .then((products) => {
        db.Images_product.findAll({
          order: [
              ['id', 'DESC']
          ]
      }).then((images)=>{
          let cookie= req.cookies.grupoReHome10_cookie
          return res.render("index", {products,images,cookie});
        }).catch((errors)=>console.log(errors));
      }).catch((errors) => console.log(errors));
  },
  admin: (req, res) => {
    db.Product.findAll()
      .then((products) => {
        db.Images_product.findAll()
          .then((images_product)=>{
            db.Category.findAll()
              .then((categories) => {
                db.User.findAll()
                  .then((users) => {
                    db.Role.findAll()
                    .then((roles) => {
                      return res.render("admin", {products,images_product,categories,users,roles,moment});
                    }).catch((errors)=>console.log(errors));
                  }).catch((errors)=>console.log(errors));
              }).catch((errors)=>console.log(errors));
          }).catch((errors)=>console.log(errors));
      }).catch((errors) => console.log(errors));
  },
  cookieContract: (req, res) => {
    let valueCookie=true;
    res.cookie('grupoReHome10_cookie',valueCookie,{
      maxAge : 1000 * 60 * 60})
    return res.redirect('/');
  }
};
