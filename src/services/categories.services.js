const db = require ('../database/models');
const { Op } = require('sequelize');

const getProductsByCategory = async (id)=>{

    try {
        const categories = await db.Category.findAll({
            where:{
                id:id
            },
            attributes: {
                exclude: ['updated_at','created_at','image']
            },
            include: [
                {
                  model: db.Product,
                  as: 'product_category', 
                  attributes: {
                    exclude: ['updated_at','created_at','category_id']
                  }
                }
            ]
        })
        const count = await db.Category.count({
            where:{
                id:id
            },
            include: [
                {
                  model: db.Product,
                  as: 'product_category', 
                  attributes: {
                    exclude: ['updated_at','created_at','category_id']
                  }
                }
            ]
        })
        return {categories,count};

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
            offset,
            attributes: {
                exclude: ['updated_at','created_at','image']
            }
        })

        if(!categories){
            throw {
                status:404,
                message: "No hay categorias"
            }
        }

        const count = await db.Category.count({
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
    getProductsByCategory,
    getAllCategories
}