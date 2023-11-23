const db = require("../../database/models");

module.exports = async (req, res) => {
  const product = await db.Order.findOne({
    where:{
      product_id:req.params.id,
      user_id:req.session.userLogin.shoppingcartId
    }
  })
  if(!product){
    db.Order.create({
      product_id: req.params.id,
      amount: 1,
      user_id: req.session.userLogin.shoppingcartId
    }).then(()=> {
      req.session.userLogin.cantItems+=1;
      res.cookie('grupoReHome10',req.session.userLogin,{
      maxAge : 1000 * 60 * 60 * 24* 365})
        return res.redirect('/')
    })
    .catch(error=>console.log(error));
  }else{
    product.amount+=1;
    await product.save();
    req.session.userLogin.cantItems+=1;
      res.cookie('grupoReHome10',req.session.userLogin,{
      maxAge : 1000 * 60 * 60 * 24 *365})
    return res.redirect('/');
  }
  
  
}
