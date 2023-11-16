const { check } = require("express-validator");

module.exports = [
  check("name").notEmpty().withMessage("* El nombre es obligatorio").isLength({ min: 2 })
  .withMessage('El nombre debe tener al menos 2 caracteres'),
  check("surname").notEmpty().withMessage("* El apellido es obligatorio").isLength({ min: 2 })
  .withMessage('El apellido debe tener al menos 2 caracteres'),
  check("address").notEmpty().withMessage("* La direccion es obligatoria"),
  check("city").notEmpty().withMessage("* La ciudad es obligatoria"),
  check("province").notEmpty().withMessage("* La provincia es obligatoria"),
  check("country").notEmpty().withMessage("* El país es obligatorio"),
];