const {readJSON} = require("../../data/index");

module.exports = (req,res) => {

    const productos = readJSON('../data/products.json');
    const productosFiltrados = productos.filter((producto) => {
        return Object.values(producto).some((valor) => valor == req.query.keywords);
    });
    res.render('results',{productosFiltrados:productosFiltrados});
    
}