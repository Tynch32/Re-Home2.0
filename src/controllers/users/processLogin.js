const { validationResult } = require("express-validator")
const db = require("../../database/models");

module.exports = async (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const user = await db.User.findOne({ where: { email: req.body.email }, attributes:['id','shoppingcart_id','role_id']});
        const role = await db.Role.findByPk(user.role_id);
        let cantItems = 0
        await db.Order.findAll({where: {shoppingcart_id: user.shoppingcart_id},
        attributes:['amount']}).then(products=>{
            products.forEach(product => {
                cantItems+=product.amount
            });
        })
        req.session.userLogin = {
            id : user.id,
            role : role.name,
            shoppingcartId:user.shoppingcart_id,
            cantItems:cantItems
        }
        if(req.body.remember == undefined){
            res.cookie('grupoReHome10',req.session.userLogin,{
                maxAge : 1000 * 60 * 60})
        }
        req.body.remember !== undefined && res.cookie('grupoReHome10',req.session.userLogin,{
            maxAge : 1000 * 60 * 60 * 24 * 365
        })
        return res.redirect('/')
    }else {
        return res.render('login',{
            errors : errors.mapped(),
            old : req.body
        });
    }
}