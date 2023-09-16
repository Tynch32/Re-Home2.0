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

        req.body.remember !== undefined && res.cookie('kitcheningUser4EVER',req.session.userLogin,{
            maxAge : 1000 * 60 * 5
        })
        
        //console.log(req.session.userLogin);
        
        return res.redirect('/')
    }else {
        return res.send(errors.mapped())
    }

  
}