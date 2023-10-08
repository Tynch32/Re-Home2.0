const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const users = readJSON('users.json');
    const products = readJSON('products.json');
    const user = users.find(user => user.id === req.session.userLogin.id);
    var carrito =[];
    if(user){
        user.shoppingCart.forEach(elementId => {
            let producto = products.find(product => product.id==elementId);
            if(producto){
                if(!user.shoppingCart.includes(producto)){
                    carrito.push(producto);
                }
            }
        });
        var total = 0;
        carrito.forEach(element=> total+=element.price);
        return res.render('productCart',{carrito,total})
    }else{
        return res.redirect('login');
    }

}