const db = require("../../database/models");

module.exports = async (req, res) => {
    let valor = await db.User.findOne({
        attributes:['role_id'],
        where:{
            id: req.params.id
        }
    });
    if(valor.dataValues.role_id==1){
        valor=2
    }else{
        valor=1
    }
    await db.User.update({role_id: valor},{where:{
        id:req.params.id
    }})
    res.redirect('/admin');
}