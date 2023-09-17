const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [
  check("nombre")
    .isLength({
      min: 2,
    })
    .withMessage("El nombre es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  check("apellido")
    .isLength({
      min: 2,
    })
    .withMessage("El apellido es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido")
    .custom((value, { req }) => {
      const users = readJSON("users.json");
      //console.log("users",users)
      const user = users.find((user) => user.email == value);
      
      if (user) {
        return false;
      }
      return true;
    })
    .withMessage("El email ya se encuentra registrado"),
    
  check("contrasena").isLength({
    min: 6,
    max: 12,
  }),
  body('contrasena2')
    .custom((value,{req}) => {
       // console.log("value",value,"req", req)
        if(value != req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
];