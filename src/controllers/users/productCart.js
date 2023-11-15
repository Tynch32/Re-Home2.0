const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = async (req,res) => {
    db.Order.findAll({
      where: {
        shoppingcart_id: req.params.id
      },
      include: [
        {
          model: db.Product,
          as:'product',
          include: [
            {
              model: db.Images_product,
              as:'product_image'
            },
          ],
        },
      ],
    }).then(async carrito=>{
        let total=0;
        await carrito.forEach(producto => {
            total+= ((producto.product.price - (producto.product.price * producto.product.discount / 100))*producto.amount);
            console.log(total);
        });
        return res.render('productCart',{carrito,total,addPuntos})
    })
    

}