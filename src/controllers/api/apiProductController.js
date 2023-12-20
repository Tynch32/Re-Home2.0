const {getAllProducts, getProductById, getProductsByCategory,getAllCategories,getCantProduct,getLastProductInDb,deleteProduct,updateProduct} = require('../../services/products.services');

const createError = require('http-errors');
const paginate = require('express-paginate');

module.exports = {
    index: async (req,res) => {
        const{keyword}=req.query;
        try {
            const {count,products} = await getAllProducts(req.query.limit,req.skip,keyword);
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
                data:products
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error al indexar productos'
            })
        }

    },
    show: async (req, res) => {
        try{
            const product = await getProductById(req.params.id);
            return res.status(200).json({
                ok:true,
                data:product
            })
        }catch(error){
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
            const {products,count} = await getProductsByCategory(req.params.id);
            return res.status(200).json({
                ok:true,
                data:products,
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
                const {count,categories} = await getAllCategories(req.query.limit,req.skip,keyword);
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
    cantProducts: async(req,res) =>{
        try {
            const cant = await getCantProduct();
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
    },
    ultimoProducto : async(req,res) => {
        try {
            const lastProduct = await getLastProductInDb();
            return res.status(200).json({
                ok:true,
                data:lastProduct
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error en el servicio'
            })
        }
    },
    destroyProduct: async (req,res)=>{
        try {
            
            await deleteProduct(req.params.id);
            
            return res.status(200).json({
                ok:true,
                message: 'Producto eliminado',
            })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error, en el servicio!'
            })
        }
    },
    update: async (req,res) =>{
        try {

            const productUpdated = await updateProduct(req.params.id, req.body);

            return res.status(200).json({
                ok:true,
                message: 'Producto actualizado con exito',
                data:productUpdated
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                status: error.status || 500,
                error: error.message || 'Error, en el servicio!'
            })
        }
    }
}