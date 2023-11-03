const db = require("../../database/models");

module.exports = (req, res) => {
  db.Shopping_cart.decrement("cantProducts",{by:1,
    where:{id:req.body.var1}
  })
  db.Order.destroy({ where: {
    product_id: req.params.id,
    shoppingcart_id: req.body.var1
  }})
  .then(()=>{
    return res.redirect('/')
  }).catch(error=>console.log(error));
};