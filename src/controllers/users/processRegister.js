const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");
const User = require("../../data/User");

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
    
      existsSync(`./public/img/users/${req.file.filename}`) &&
      unlinkSync(`./public/img/users/${req.file.filename}`);

    return res.render("register", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
};
