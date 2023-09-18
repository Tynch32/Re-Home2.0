const { write } = require("fs");
const { readJSON, writeJSON } = require("../../data/index")

module.exports = (req,res) => {
  
    console.log("hola")
    const users = readJSON('users.json');

    const id = req.session.userLogin.id
    const userModify = users.map(user => {
        
        if(user.id == id)
        {  
            user.nombre = req.body.nombre
            user.apellido = req.body.apellido
            user.domicilio = req.body.domicilio
            user.pais = req.body.pais
            user.ciudad = req.body.ciudad
            user.provincia = req.body.provincia
            user.email = req.body.email  
        }
        return user
    })

    
    writeJSON(userModify, 'users.json') 
   
    const user = users.find(user => user.id === req.session.userLogin.id);
    return res.render('perfil',{
        ...user
    })
    
}