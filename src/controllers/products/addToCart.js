const db = require("../../database/models");

module.exports = (req, res) => {
  
  db.Shopping_cart.increment("cantProducts",{by:1,
    where:{id:req.params.id}
  })
  db.User.findByPk(req.params.id)
  .then(user=>{
    db.Order.create({
      product_id: req.params.id,
      amount: 1,
      shoppingcart_id:req.params.id
    }).then(()=> 
      {return res.redirect('/')})
    .catch(error=>console.log(error));
  }).catch(error=>console.log(error));
  
}
