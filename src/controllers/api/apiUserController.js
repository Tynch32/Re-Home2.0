const {getAllUsers, getUserById, getCantUsers} = require('../../services/user.services');

const createError = require('http-errors');
const paginate = require('express-paginate');

module.exports = {
    index: async (req,res) => {
        
        const{keyword}=req.query;

        try {
            const {count,users} = await getAllUsers(req.query.limit,req.skip,keyword);
            const pagesCount = Math.ceil(count/req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage);
            return res.status(200).json({
                ok:true,
                meta:{
                    pagesCount,
                    currentPage,
                    pages
                },
                data:users
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error al indexar usuarios'
            })
        }

    },
    show: async (req, res) => {
        try{
            const user = await getUserById(req.params.id);
            return res.status(200).json({
                ok:true,
                data:user
            })
        }catch(error){
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error en el servicio'
            })
        }
    },
    cant : async(req,res) => {
        try {
            const cant = await getCantUsers();
            return res.status(200).json({
                ok:true,
                data:cant
            })
        } catch (error) {
             return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error en el servicio'
            })
        }
    }
}