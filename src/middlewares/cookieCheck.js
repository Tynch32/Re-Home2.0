module.exports = (req,res,next) => {
    if(req.cookies.grupoReHome10){
        req.session.userLogin = req.cookies.grupoReHome10
    }
    next()
}