module.exports = {
    index: (req, res) => {
        return res.render('index') 
    },
    admin : (req,res)  => {
        const products = readJSON('products.json');
        const categories = readJSON('categories.json');
        return res.render('admin', {
            products,
            categories
        })
    }
}