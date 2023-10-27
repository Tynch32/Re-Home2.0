const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("name").notEmpty().withMessage("El nombre es obligatorio"),
  check("surname").notEmpty().withMessage("El apellido es obligatorio"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido")
    .custom(async (value, { req }) => {
      await db.User.findOne({where:{
        email: req.body.email
      }}).then((userEmail)=>{
        if(userEmail){
          return true
        }else{
          return false
        }
      })
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
