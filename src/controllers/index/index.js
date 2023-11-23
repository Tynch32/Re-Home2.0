const db = require("../../database/models");
const addPuntos = require('../../middlewares/addPuntos')

module.exports = (req, res) => {
    db.Product.findAll({
        order: [['category_id', 'ASC']],
        include: ['product_image', 'product_category'],
    })
        .then((products) => {
            let cookie = req.cookies.grupoReHome10_cookie;
            let categories = [];
            let nombresSinRepetir = []
            products.forEach(product => {
                if (!nombresSinRepetir.includes(product.product_category.name)) {
                    categories.push(product.product_category)
                    nombresSinRepetir.push(product.product_category.name)
                }
            });
            categories.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            }
            );
            return res.render("index", { products, cookie, categories, addPuntos });
        }).catch((errors) => console.log(errors));
}
