const db = require("../../database/models");

module.exports = (req,res) => {
    db.Category.findAll({
        where:['name', 'ASC']
    }).then(categories=>{
        return res.render('productAdd',categories);
    }).catch((errors)=>console.log(errors));
}