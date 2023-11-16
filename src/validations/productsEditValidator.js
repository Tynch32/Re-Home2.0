const { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("* El nombre es obligatorio")
    .bail()
    .isLength({
      min: 5,
      max: 50,
    })
    .withMessage("* Debe tener entre 5 y 50 caracteres"),
  check("price")
    .notEmpty()
    .withMessage("* El precio es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("* El precio debe ser positivo"),
  check("description").isLength({
    min: 20,
    max: 500,
  }).withMessage('* Debe tener entre 20 y 500 caracteres'),
];
