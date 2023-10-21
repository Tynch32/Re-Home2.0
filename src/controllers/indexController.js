const path = require("path");
const db = require("../database/models");
const images_product = require("../database/models/images_product");

module.exports = {
  index: (req, res) => {
    db.Order.findAll()
      .then((products) => {
        return res.render("index", {products});
      })
      .catch((errors) => console.log(">>",errors));
  },
  admin: (req, res) => {
    db.Product.findAll()
      .then((products) => {
        return res.render("index", {products});
      })
      .catch((errors) => console.log(errors));
  },
};
