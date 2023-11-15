const db = require("../../database/models");

module.exports = async (req, res) => {
  const product = await db.Order.findOne({
    where:{
      product_id:req.params.id,
      shoppingcart_id:req.body.var1
    }
  })
  if(!product){
    db.Order.create({
      product_id: req.params.id,
      amount: 1,
      shoppingcart_id: req.body.var1
    }).then(()=> 
      {return res.redirect('/')})
    .catch(error=>console.log(error));
  }else{
    product.amount+=1;
    await product.save()
    return res.redirect('/')
  }
  
  
}
