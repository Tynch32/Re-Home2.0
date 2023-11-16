const { body } = require("express-validator");
const db = require("../database/models");
const {compareSync} = require('bcryptjs');

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("* El email es obligatorio")
    .isEmail()
    .withMessage("* El formato del email es invalido")
    .custom(async (value, { req }) => {
      let emailRegistrado = await db.User.findOne({where:{email: value}})
      if(emailRegistrado!=null){
        return true;
      }else{
        throw new Error('* Datos invalidos');
      }
    })
  .withMessage("* El email no se encuentra registrado"),
  body("password")
    .custom(async(value, {req}) => {
        const user = await db.User.findOne({ where: { email: req.body.email } });
        if(user!=null && compareSync(value,user.password)){
          return true;
        }else{
          throw new Error('* Datos invalidos');
        }
  }).withMessage('* Contraseña incorrecta')
];
