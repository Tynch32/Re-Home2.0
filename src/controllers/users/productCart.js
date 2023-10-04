const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const usuario = (readJSON('users.json')).find(usuario => usuario == req.session.userLogin);
    const shopping_cart = usuario.shopping_cart;
    return res.render('productCart', {shopping_cart});

}