const { check, body } = require("express-validator");
const { readJSON } = require("../data/index");
const bcrypt = require("bcryptjs")
const { log } = require("console");

module.exports = [
  check("email")
  .notEmpty()
  .withMessage("El email es obligatorio")
  .isEmail()
  .withMessage("Formato inválido"),
  body("password")
    .custom((value, {req}) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.email === req.body.email);
        const userPass = user.contrasena
        let coca = bcrypt.compareSync(value,userPass)
        if(!user || !coca){
          
            return false
        }
            return true
    }).withMessage('Credenciales inválidas')
];