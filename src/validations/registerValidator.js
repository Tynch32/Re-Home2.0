const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [
    check("nombre").isLength({min:2}).withMessage("El nombre es obligatorio"),
    check("apellido").isLength({min:2}).withMessage("El apellido es obligatorio"),
    check("ciudad").isLength({min: 2}).withMessage("La ciudad es obligatoria"),
    check("provincia").isLength({min:2}).withMessage("La provincia es obligatoria"),
    check("pais").isLength({min: 2}).withMessage("El pais es obligatorio"),
    body("email").notEmpty().withMessage("El email es obligatorio").isEmail().withMessage("Formato inválido de Email")
        .custom((value, { req }) => {
            const users = readJSON("users.json");
            const user = users.find((user) => user.email === value);

            if (user) {
                return false;
            }
            return true;
        }).withMessage("El email ya se encuentra registrado"),
    check("contrasena").isLength({min: 6}),
    body('contrasena2').custom((value, { req }) => {
            if (value !== req.body.contrasena) {
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden')
];
