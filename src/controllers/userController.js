module.exports = {
    productCart: (req, res) => {
        return res.render('productCart')
    },
    register: (req, res) => {
        return res.render('register')
    },
    login: (req, res) => {
        return res.render('login')
    },
    notFound: (req, res) => {
        return res.render('404');
    }  
}