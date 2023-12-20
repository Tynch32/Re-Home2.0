const {getProductsByCategory,getAllCategories,getCantCategories} = require('../../services/categories.services');

const createError = require('http-errors');
const paginate = require('express-paginate');

module.exports = {
    cantCategories : async (req,res) => {
        try {
            const cantidad = await getCantCategories();
            return res.status(200).json({
                ok:true,
                data:cantidad
        })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error en el servicio'
            })
        }
    },
    productsByCategory: async (req,res) =>{
        const{keyword}=req.query;
        try {
            const {categories,count} = await getProductsByCategory(req.params.id);
            return res.status(200).json({
                ok:true,
                data:categories,
                count:count
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error en el servicio'
            })
        }
    },
    getCategories: async (req,res) => {
        const{keyword}=req.query;
        try {
                const {count,categories} = await getProductsByCategory(req.query.limit,req.skip,keyword);
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
                    data:categories
                })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error en el servicio'
            })
        }
        
    },
    getAllCategories:async (req,res) => {
        try {
            const categories = await getAllCategories();
            return res.status(200).json({
                ok:true,
                data:categories.categories
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