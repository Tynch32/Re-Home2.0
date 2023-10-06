const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
  const errors = validationResult(req);
  const users = readJSON("users.json");

  if (errors.isEmpty()) {
    const { name, surname, adress, city, province, country } = req.body;

    const usersModify = users.map((user) => {
      if (user.id === req.params.id) {
        user.name = name.trim();
        user.surname = surname.trim();
        user.adress = adress.trim();
        user.city = city.trim();
        user.province = province.trim();
        user.country = country.trim()
      }
      return user;
    });

    writeJSON(usersModify, "users.json");
    return res.redirect("/");
  } else {
    if(req.file){
      if(existsSync(`./public/img/users/${req.file.filename}`)){
        unlinkSync(`./public/img/users/${req.file.filename}`)
      }
    }
    const user = users.find(user => user.id === req.params.id)
    return res.render('profile',{
        errors: errors.mapped(),
        ...user
    })
  }
};
