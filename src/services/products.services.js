const db = require ('../database/models');
const { Op } = require('sequelize');

const getAllProducts = async (limit, offset,keyword) => {

    const options = keyword ? {
        where:{
            name:{
                [Op.substring] : keyword
            }
        }
    }: null;

    try {

        const products = await db.Product.findAll({
            limit,
            offset,
            attributes:{
                exclude: ['updated_at']
            },
            include:['product_image','product_category'],
            ...options
        })

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

        if(!id){
            throw {
                status: 404,
                message: "ID invalido"
            }
        }
        const product = await db.Product.findByPk(id, {attributes:{
                exclude: ['updated_at','created_at','category_id']},
                include:['product_image','product_category'],
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
        const products = db.Product.findAll({
            where:{
                category_id:id
            }
        })
        return products;

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory
}