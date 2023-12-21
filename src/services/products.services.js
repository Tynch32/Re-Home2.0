const db = require ('../database/models');
const { Op } = require('sequelize');

const getAllProducts = async (limit, offset, keyword) => {

    const options = keyword ? {
        where:{
            name:{
                [Op.substring] : keyword
            }
        }
    }: null ;

    try {

        const products = await db.Product.findAll({
            limit,
            offset,
            attributes:{
                exclude: ['updated_at','created_at','category_id']
            },
            include: [
                {
                  model: db.Images_product,
                  as: 'product_image', 
                  attributes: {
                    exclude: ['updated_at','created_at']
                  }
                },
                {
                    model: db.Category,
                    as: 'product_category', 
                    attributes: {
                      exclude: ['updated_at','created_at','image']
                    }
                }
            ],
            ...options
        })
        if(products){
            products.map(product=>product.dataValues.detail=`http://localhost:3000/api/products/${product.dataValues.id}`)
        }
        if(!products){
            throw {
                status:404,
                message: "No hay productos"
            }
        }

        const count = await db.Product.count({
            ...options
        })

        return {products,count}

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}

const getProductById = async (id) => {

    try {

        const product = await db.Product.findByPk(id, {
        
            attributes:{
                exclude: ['updated_at','created_at','category_id']
            },
            include: [
                {
                  model: db.Images_product,
                  as: 'product_image', 
                  attributes: {
                    exclude: ['updated_at','created_at','product_id']
                  }
                },
                {
                    model: db.Category,
                    as: 'product_category', 
                    attributes: {
                      exclude: ['updated_at','created_at','image']
                    }
                }
            ]
            }
        )

        if(!product){
            throw {
                status: 404,
                message: 'No hay un producto con ese ID'
            }
        }
        return product;

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}

const getProductsByCategory = async (id)=>{

    try {
        const products = await db.Product.findAll({
            where:{
                category_id:id
            },
            attributes: {
                exclude: ['updated_at','created_at','category_id']
            }
        })
        const count = await db.Product.count({
            where:{
                category_id:id
            }
        })
        return {products,count};

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}

const getAllCategories = async(limit, offset, keyword) => {
    const options = keyword ? {
        where:{
            name:{
                [Op.substring] : keyword
            }
        }
    }: null;

    try {

        const categories = await db.Category.findAll({
            limit,
            offset
        })

        if(!categories){
            throw {
                status:404,
                message: "No hay categorias"
            }
        }

        const count = await db.Product.count({
            ...options
        })

        return {categories,count}

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}
const getCantProduct = async () => {
    try {
        const count = await db.Product.count();
        return count;
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}
const getLastProductInDb = async () => {
    try {
        const ultimoElemento = await db.Product.findOne({
            order: [['created_at', 'DESC']],
            include: [
                {
                  model: db.Images_product,
                  as: 'product_image', 
                  attributes: {
                    exclude: ['updated_at','created_at','product_id']
                  }
                },
                {
                    model: db.Category,
                    as: 'product_category', 
                    attributes: {
                      exclude: ['updated_at','created_at','image']
                    }
                }
            ]
          });
        return ultimoElemento;
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}
const deleteProduct = async(id)=>{

    try {
        if(isNaN(id)){
            throw{
                status:404,
                message: "ID invalida"
            }
        }

        const product = await db.Product.findByPk(id);

        if(!product){
            throw{
                status:404,
                message: "No hay una película con ese ID"
            }
        }
        await db.Images_product.destroy({
            where: {
                product_id: id
            }
        })

        await db.Order.destroy({
            where: {
                product_id: id
            }
        })

        await product.destroy()

        return null;


    } catch (error) {
        console.log(error);
        throw{
            status: error.status || 500,
            message : error.message || 'Error en el servicio'
        }
    }
}
const updateProduct = async (id, dataProduct) => {
    try {
        const {name,price,discount,description,category_id} = dataProduct

        const product = await db.Product.findByPk(id,{
            attributes: {
                exclude: ['created_at']
            }
        });

        if(!product){
            throw{
                status: 404,
                message: 'No hay productos con ese ID'
            }
        }

        product.name = name?.trim() || product.name;
        product.price = price ||product.price;
        product.discount = discount ||product.discount;
        product.description = description?.trim() || product.description;
        product.category_id = category_id || product.category_id;
        product.updated_at = Date.now();

        await product.save();

        await product.reload();

        return product;

    } catch (error) {
        console.log(error);
        throw{
            status: error.status || 500,
            message : error.message || 'Error en el servicio'
        }
    }
}
const topSales = async () => {
    try {
        let ventas=[]
        await db.Venta.findAll({order: [['created_at', 'ASC']]}).then(venta=>{
            venta.forEach(element => {
                let venta={
                    id:element.dataValues.id,
                    product_id:element.dataValues.product_id,
                    cantidad:element.dataValues.cantidad,
                    precio:element.dataValues.precio,
                    fecha:element.dataValues.created_at
                }
                ventas.push(venta);
            });
        })
        return ventas;
    } catch (error) {
        console.log(error);
        throw{
            status: error.status || 500,
            message : error.message || 'Error en el servicio'
        }
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getAllCategories,
    getCantProduct,
    getLastProductInDb,
    deleteProduct,
    updateProduct,
    topSales
}