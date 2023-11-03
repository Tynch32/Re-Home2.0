const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = async (req,res) => {
    db.Order.findAll({where:{
        shoppingcart_id: req.params.id}
    ,include:['product','imageOrder']}
    ).then(async carrito=>{
        let total=0;
        await carrito.forEach(producto => {
            total+= producto.product.price - (producto.product.price * producto.product.discount / 100);
        });
        return res.render('productCart',{carrito,total,addPuntos})
    })
    

}