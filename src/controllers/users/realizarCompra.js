const db = require("../../database/models");

module.exports = async (req, res) => {
    const productos = await db.Order.findAll({
        where: {
          user_id: req.session.userLogin.shoppingcartId
        },
        include: [
          {
            model: db.Product,
            as:'product',
          },
        ],
    })
    productos.forEach(producto => {
      db.Venta.create({
        product_id: producto.product.id,
        cantidad:producto.amount,
        precio:producto.product.price
      })
    });
    await db.Order.destroy({
      where:{
        user_id: req.session.userLogin.shoppingcartId
      }
    })
    req.session.userLogin.cantItems=0;
    res.cookie('grupoReHome10',req.session.userLogin,{
      maxAge : 1000 * 60 * 60});
    return res.redirect('/');
}