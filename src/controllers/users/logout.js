module.exports = (req,res) => {
    
    req.session.destroy();
    res.cookie('nombreDeLaCookie', null,{
        maxAge : -1
    })
    return res.redirect('/')

}