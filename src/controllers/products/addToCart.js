const db = require("../../database/models");

module.exports = (req, res) => {
  
  db.Shopping_cart.increment("cantProducts",{by:1,
    where:{id:req.body.var1}
  })
  db.User.findByPk(req.params.id)
  .then(user=>{
    db.Order.create({
      product_id: req.params.id,
      amount: 1,
      shoppingcart_id: req.body.var1
    }).then(()=> 
      {return res.redirect('/')})
    .catch(error=>console.log(error));
  }).catch(error=>console.log(error));
  
}
