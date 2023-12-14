const db = require ('../database/models');
const { Op } = require('sequelize');

const getAllUsers = async (limit, offset, keyword) => {

    const options = keyword ? {
        where:{
            name:{
                [Op.substring] : keyword
            }
        }
    } : null;
    
    try {
        const users = await db.User.findAll({
            limit,
            offset,
            attributes:{
                exclude: ['updated_at','password','address_id','role_id','image_id']
            },
            ...options
        })
        if(!users){
            throw {
                status:404,
                message: "No hay usuarios"
            }
        }

        const count = await db.User.count({
            ...options
        })

        return {users,count}

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
}

const getUserById = async (id) => {

    try {

        if(!id){
            throw {
                status: 404,
                message: "ID invalido"
            }
        }
        const user = await db.User.findByPk(id,{
            include:['roleId','imageId','addressId']
        })

        if(!user){
            throw {
                status: 404,
                message: 'No hay un usuario con ese ID'
            }
        }

        return user;

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'Error en el servicio'
        }
    }
    
}

module.exports = {
    getAllUsers,
    getUserById
}