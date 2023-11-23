const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {

    const datosPersonales= {
      name: req.body.name.trim(), 
      surname: req.body.surname.trim(),
      updated_at: new Date()
    }
    const direccionNueva={
      address: req.body.address.trim(),
      city: req.body.city.trim(),
      province: req.body.province.trim(),
      country: req.body.country.trim(),
      updated_at: new Date()
    }
    db.User.update(datosPersonales,{
      where:{
        id:req.session.userLogin.id,
      }
    }).catch(error=>console.log(error));
    db.User.findByPk(req.session.userLogin.id).then(user=>{
      db.Address.update(direccionNueva,{
          where:{
            id:user.address_id
          }
        }).catch(error=>console.log(error));
      }).then((user)=> {return res.redirect('/');
    }).catch(error=>console.log(error));
    
  } else {

    if(req.file){
      if(existsSync(`./public/img/users/${req.file.filename}`)){
        unlinkSync(`./public/img/users/${req.file.filename}`)
      }
    }

    db.User.findByPk(req.params.id,{include:['addressId','imageId']}).then(
      user=>{

        return res.render('profile',{
          errors: errors.mapped(),
          ...user.dataValues
      })

    }).catch(error=>console.log(error));
    
  }
};
