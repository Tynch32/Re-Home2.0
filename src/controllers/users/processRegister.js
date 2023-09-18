const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");
const User = require("../../data/User");

module.exports = (req, res) => {
    const usuarios = readJSON("users.json");

    const modify_request = req.body;
    delete modify_request.contrasena2;
    
    const newUser = new User(modify_request);
    usuarios.push(newUser);
    
    writeJSON(usuarios, "users.json");

    res.redirect("register");
};
