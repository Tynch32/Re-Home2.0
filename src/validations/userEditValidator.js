const { check } = require("express-validator");
module.exports = [
  check("name").notEmpty().withMessage("El nombre es obligatorio"),
  check("surname").notEmpty().withMessage("El apellido es obligatorio"),
  check("adress").notEmpty().withMessage("La direccion es obligatoria"),
  check("city").notEmpty().withMessage("La ciudad es obligatoria"),
  check("province").notEmpty().withMessage("La provincia es obligatoria"),
  check("country").notEmpty().withMessage("El país es obligatorio"),
];