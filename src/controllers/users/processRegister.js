const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");
const User = require("../../data/User");

module.exports = (req,res) => {
    
    //const errors = validationResult(req);
   
       const usuarios = readJSON("users.json")
       
       
       //console.log(req.body)
       const modify_request = req.body
       delete modify_request.contrasena2;
       //console.log(modify_request)
       const newUser = new User(modify_request);
       console.log(newUser)
       usuarios.push(newUser);
       
       writeJSON(usuarios,'users.json')
    
        res.redirect('register') 
  
    
 
}