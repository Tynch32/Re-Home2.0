const db = require("../../database/models");

module.exports = async (req, res) => {
    
    db.User.update(valor,{where:{
        id:req.params.id
    }}).catch(error=>console.log(error));

}