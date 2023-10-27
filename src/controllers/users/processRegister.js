const {unlinkSync, existsSync} = require('fs');
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const users = readJSON("users.json");
    const data = {
      ...req.body,
      image: req.file ? req.file.filename : null,
    };
    const newUser = new User(data);
    users.push(newUser);
    writeJSON(users, "users.json");
    return res.redirect("/users/login");
  } else {
    if(req.file){
      if(existsSync(`./public/img/users/${req.file.filename}`)){
      unlinkSync(`./public/img/users/${req.file.filename}`)
      }
    }
  return res.render("register", {
      errors: errors.mapped(),
      old: req.body,
      imageError: "Debes volver a cargar la imagen"
    });
  }
};
//https://chat.openai.com/c/60f12921-f49b-43da-a77b-3f399adc9593