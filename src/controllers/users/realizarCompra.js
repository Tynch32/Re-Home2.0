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
        product_id: producto.id,
        cantidad:producto.amount,
        precio:producto.product.price
      })
    });
    return null
}