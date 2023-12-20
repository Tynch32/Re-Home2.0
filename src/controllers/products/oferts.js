const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos');
const paginate = require('express-paginate');

module.exports = async (req,res) => {
    try {
        const currentPage = req.query.page||0;
        const [products, itemCount] = await Promise.all([
            db.Product.findAll({
                where: {
                    discount: {
                        [db.Sequelize.Op.gt]: 0,
                  } 
                },
                order: [['category_id', 'ASC']],
                include: ['product_image'],
                limit: 8,
                offset: req.skip,
            }),
            db.Product.count({where: {
                discount: {
                    [db.Sequelize.Op.gt]: 0,
              } 
            }}),
        ]);
        console.log(itemCount);
        const categories = await db.Category.findAll();
        const pageCount = Math.ceil(itemCount / 8);
        let cookie = req.cookies.grupoReHome10_cookie;

        res.render("index", {
            currentPage,
            products,
            cookie,
            categories,
            addPuntos,
            pageCount,
            itemCount,
            pages: paginate.getArrayPages(req)(pageCount, pageCount, req.query.page),
        });
    } catch (errors) {
        console.log(errors);
        res.status(500).send('Error interno del servidor');
    }
}