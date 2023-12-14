const db = require ('../database/models');
const { Op } = require('sequelize');

const getAllProducts = async (limit, offset, keyword) => {

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
            ]
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

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getAllCategories
}