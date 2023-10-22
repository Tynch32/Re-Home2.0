const path = require("path");
const db = require("../database/models");
const images_product = require("../database/models/images_product");
const { error } = require("console");

module.exports = {
  index: (req, res) => {
    db.Product.findAll()
      .then((products) => {
        db.Images_product.findAll().then((images)=>{
          return res.render("index", {products,images});
        }).catch((errors)=>console.log(errors));
      })
      .catch((errors) => console.log(errors));
  },
  admin: (req, res) => {
    db.Product.findAll()
      .then((products) => {
        return res.render("index", {products});
      })
      .catch((errors) => console.log(errors));
  },
};
