module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('grupoReHome10', null,{
        maxAge : -1
    })
    
    return res.redirect('/')
}