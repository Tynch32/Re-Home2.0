const { check, body } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("* Es nombre es obligatorio")
    .bail()
    .isLength({
      min: 5,
      max: 50,
    })
    .withMessage("* Debe tener entre 5 y 50 caracteres"),
  check("category")
    .notEmpty()
    .withMessage("* La categoria es requerida"),
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
  body('image')
    .custom((value,{req}) => {
      if(req.files.image){
        return true
      }
      return false
    }).withMessage('* Debes subir una imagen principal')
];
