const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {

  const errors = validationResult(req);
  const users = readJSON("users.json");

  if (errors.isEmpty()) {
    const { name , surname, adress, city, province, country} = req.body;
    const image = req.file;
    const usersModify = users.map((user) => {
      if (user.id === req.params.id) {
        user.name = name ? name.trim(): user.name;
        user.surname = surname ? surname.trim():user.surname;
        user.adress = adress ? adress.trim():user.adress;
        user.city = city ? city.trim():user.city;
        user.province = province ? province.trim():user.province;
        user.country = country ? country.trim():user.country;
        user.image= image ? image.filename:user.image;
      }
      return user;
    });
    writeJSON(usersModify, "users.json");
    return res.redirect("/");
  }else{
     return res.render('profile',{
        errors: errors.mapped(),
        ...user
    })
  }
};
