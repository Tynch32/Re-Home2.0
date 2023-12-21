const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos');
const paginate = require('express-paginate');

module.exports = async (req,res) => {
    try {
        const [products] = await Promise.all([
            db.Product.findAll({
                where: {
                    discount: {
                        [db.Sequelize.Op.gt]: 0,
                  } 
                },
                limit: 3,
                order: [['price', 'DESC']],
                include: ['product_image'],
                offset: req.skip,
            }),
        ]);
        let product = await db.Product.findByPk(37,{include:['product_image']});
        await products.push(product)
        const categories = await db.Category.findAll();
        let cookie = req.cookies.grupoReHome10_cookie;

        res.render("topSales", {
            products,
            cookie,
            categories,
            addPuntos
        });
    } catch (errors) {
        console.log(errors);
        res.status(500).send('Error interno del servidor');
    }
}