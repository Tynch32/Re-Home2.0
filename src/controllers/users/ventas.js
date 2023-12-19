const { validationResult } = require("express-validator")
const db = require("../../database/models");

module.exports = async (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        await db.ventas.create({
            city:req.body.city.trim(),
            province:req.body.province.trim(),
            country:req.body.country.trim(),
            address:req.body.address
        }).then(address=>addressId=address.id).catch(error=>console.log(error));
        return res.redirect('/')
    }else {
        return res.render('login',{
            errors : errors.mapped(),
            old : req.body
        });
    }
}