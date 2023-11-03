const db = require("../../database/models");

module.exports = (req, res) => {
  db.Shopping_cart.decrement("cantProducts",{by:1,
    where:{id:req.params.id}
  })
  db.Order.destroy({ where: {
    product_id: req.params.id}})
  .then(()=>{
    return res.redirect('/')
  }).catch(error=>console.log(error));
};