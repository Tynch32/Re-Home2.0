module.exports = (req,res,next) => {
    if(req.cookies.kitcheningUser4EVER){
        req.session.userLogin = req.cookies.kitcheningUser4EVER
    }
    next()
}