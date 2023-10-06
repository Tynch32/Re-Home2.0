const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [
  check("name").notEmpty().withMessage("El nombre es obligatorio"),
  check("surname").notEmpty().withMessage("El apellido es obligatorio"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido")
    .custom((value, { req }) => {
      const users = readJSON("users.json");
      const user = users.find((user) => user.email === value);

      if (user) {
        return false;
      }
      return true;
    })
    .withMessage("El email ya se encuentra registrado"),
  check("password").notEmpty().withMessage("La contraseña es obligatoria"),
  body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
  }).withMessage('Las contraseñas no coinciden'),
  body('image').custom((value,{req}) => {
      if(req.file){
        return true
      }else{
        return false
      }
  }).withMessage('Debes subir una foto de perfil')
];
