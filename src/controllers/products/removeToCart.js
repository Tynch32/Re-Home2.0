const db = require("../../database/models");

module.exports = (req, res) => {
  db.Order.destroy({ where: {
    product_id: req.params.id,
    shoppingcart_id: req.body.var1
  }})
  .then(async ()=>{
    let cant_Items=0;
    await db.Order.findAll({where: {shoppingcart_id: req.session.userLogin.shoppingcartId},
      attributes:['amount']}).then(products=>{
          products.forEach(product => {
              cant_Items+=product.amount
          });
      req.session.userLogin.cantItems=cant_Items;
      res.cookie('grupoReHome10',req.session.userLogin,{
        maxAge : 1000 * 60 * 60})
      })
    return res.redirect('/')
  }).catch(error=>console.log(error));
};