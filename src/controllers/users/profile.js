const db = require("../../database/models");

module.exports = (req,res) => {
    db.User.findByPk(req.session.userLogin.id,{
        include:['roleId','imageId','addressId']
    })
    .then(user=>{
        if(user){
            return res.render('profile',{...user.dataValues})
        }else{
            return res.redirect('login')
        }
    }).catch(error=>console.log(error));
}