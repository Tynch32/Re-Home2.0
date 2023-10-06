const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const users = readJSON('users.json');
    const products = readJSON('products.json');
    const user = null;
    if(req.session.userLogin){
        user = users.find(user => user.id === req.session.userLogin.id);
    }

    const product = req.params.id;

    if(user){
        let productToAdd = products.find(element=> element.id==product);
        if(productToAdd){
            if(!user.shoppingCart.find(element=>element.id==productToAdd.id)){
                user.shoppingCart.push(productToAdd.id);
            }
        }
        return res.redirect('/');
    }else{
        return res.render('login');
    }
}