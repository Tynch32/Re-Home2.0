const { validationResult } = require("express-validator")
const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const users = readJSON('users.json')
        const {id,name,role} = users.find(user => user.email === req.body.email)
        
        req.session.userLogin = {
            id,
            name,
            role
        }
        req.body.remember !== undefined && res.cookie('grupoReHome10',req.session.userLogin,{
            maxAge : 1000 * 60 * 60
        })
        return res.redirect('/')
    }else {
        return res.render('login',{
            errors : errors.mapped(),
            old : req.body
        });
    }

  
}