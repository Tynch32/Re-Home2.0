const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [
  check("name").notEmpty().withMessage("El nombre es obligatorio"),
  check("surname").notEmpty().withMessage("El apellido es obligatorio"),
];