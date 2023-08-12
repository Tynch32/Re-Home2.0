module.exports = {
    productCart : (req,res) => {
        return res.render('productCart')
    },
    productDetail : (req,res) => {
        return res.render('productDetail')
    },
    register : (req,res) => {
        return res.render('register')
    },
    login : (req,res) => {
        return res.render('login')
    },
    productAdd : (req,res) => {
        return res.render('productAdd')
    },
    productEdit : (req,res) => {
        return res.render('productEdit')
    },
    notFound : (req,res) => {
        return res.render('404')
    }
}