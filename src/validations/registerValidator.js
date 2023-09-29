const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [
  check("name")
    .isLength({
      min: 2,
    })
    .withMessage("El nombre es obligatorio"),
  check("surname")
    .isLength({
      min: 2,
    })
    .withMessage("Campo apellido obligatorio"),
  check("adress")
    .isLength({
      min: 2,
    })
    .withMessage("Campo domicilio obligatorio"),
  check("city")
    .isLength({
      min: 2,
    })
    .withMessage("Campo city obligatorio"),
  check("province")
    .isLength({
      min: 2,
    })
    .withMessage("Campo province obligatorio"),
  check("country")
    .isLength({
      min: 2,
    })
    .withMessage("Campo city obligatorio"),
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
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Minimo 6 caracteres"),
  body("password2")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return false;
      }
      return true;
    })
    .withMessage("Las contraseñas no coinciden"),
];
