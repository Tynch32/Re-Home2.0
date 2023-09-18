const { validationResult } = require("express-validator")
const { readJSON } = require("../../data/index")

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){

        const users = readJSON('users.json')
        const {id,nombre,rol} = users.find(user => user.email === req.body.email)

        req.session.userLogin = {
            id,
            nombre,
            rol
        }
         req.body.remember !== undefined && res.cookie('grupoReHome10',req.session.userLogin,{
            maxAge : 1000 * 60 * 5
        })
        
    
        
        return res.redirect('/')
    }else {
        //const error = errors.mapped()
        return  res.redirect('login')
    }

  
}