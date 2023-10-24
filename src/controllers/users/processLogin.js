const db = require("../../database/models");

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const users = readJSON('users.json')
        const {id,role,shoppingCart} = users.find(user => user.email === req.body.email)
        const cantProduct=shoppingCart?shoppingCart.length:0;
        req.session.userLogin = {
            id,
            role,
            cantProduct
        }
        req.body.remember !== undefined && res.cookie('grupoReHome10',req.session.userLogin,{
            maxAge : 1000 * 60 * 60
        })
        return res.redirect('/')
    }else {
        return res.render('login',{
            errors : errors.mapped(),
            old : req.body
        });
    }

  
}