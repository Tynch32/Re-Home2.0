const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const users = readJSON('users.json');
    const products = readJSON('products.json');
    const user = users.find(user => user.id === req.session.userLogin.id);
    if(user){
        const carrito = [];
        user.shopping_cart.forEach( elementId => {
            let producto = products.find(product => product.id==elementId);
            if(producto){
                carrito.push(producto);
            }
        });
        return res.render('productCart',{carrito})
    }else{
        return res.redirect('login');
    }

}