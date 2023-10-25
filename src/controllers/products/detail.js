const db = require("../../database/models");

module.exports = async (req,res) => {
    
    let product;
    let imagenes=[];
    await db.Product.findByPk(req.params.id).then(producto=> product=producto);
    await db.Images_product.findAll({
        attributes:['file'],
        where: {
            product_id: req.params.id}
        })
        .then(images=>
            images.forEach(image => {
                imagenes.push(image.dataValues.file)
            })
        );
    return res.render('productDetail', {
        ...product.dataValues,imagenes
    })

}