const db = require("../../database/models");
const { unlinkSync, existsSync } = require("fs");


module.exports = (req,res) => {
    db.Images_product.destroy({
        where: {
            product_id: req.params.id
        }
    }).then(()=>{
        db.Product.destroy({ where: {
            id: req.params.id
        }}).then((product) => {
            if (product.id == req.params.id) {
            existsSync(`./public/img/products/${product.image}`) &&
            unlinkSync(`./public/img/products/${product.image}`);
            }
            console.log('Registros eliminados con éxito');
            
            return res.redirect('/admin');
        })
        .catch(error => {
            console.error('Error al eliminar registros:', error);
        })
    }
    ).catch(error => {
        console.error('Error al eliminar registros:', error);
    });
}