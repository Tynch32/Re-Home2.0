const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("name").notEmpty()
    .withMessage("* El nombre es obligatorio")
    .isLength({ min: 2 })
    .withMessage('* El nombre debe tener al menos 2 caracteres')
    .isAlpha().withMessage('El nombre solo debe contener letras.'),
  check("surname").notEmpty()
    .withMessage("* El apellido es obligatorio")
    .isLength({ min: 2 })
    .withMessage('* El apellido debe tener al menos 2 caracteres')
    .isAlpha().withMessage('El nombre solo debe contener letras.'),
  body("email")
    .notEmpty()
    .withMessage("* El email es obligatorio")
    .isEmail()
    .withMessage("* El formato del email es invalido")
    .custom(async (value, { req }) => {
      let emailRegistrado = await db.User.findOne({where:{email: value}})
      if(emailRegistrado==null){
        return true;
      }else{
        throw new Error('Este correo electrónico ya está registrado');
      }
    })
    .withMessage("* El email ya se encuentra registrado"),
  check("password").notEmpty().withMessage("* La contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage('* La contraseña debe tener minimo 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    .withMessage('La contraseña debe tener letras mayúsculas, minúsculas, un número y un carácter especial'),
  body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
  }).withMessage('* Las contraseñas no coinciden'),
  body('image').custom((value,{req}) => {
      if(req.file){
        return true
      }else{
        return false
      }
  }).withMessage('* Debes subir una foto de perfil')
];
