const db = require("../../database/models");
const { validationResult } = require("express-validator");
const {hashSync} = require('bcryptjs');
const {unlinkSync, existsSync} = require('fs');

module.exports = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    let addressId=0;
    let imageId=0;
    await db.Address.create({
      city:req.body.city.trim(),
      province:req.body.province.trim(),
      country:req.body.country.trim(),
      address:req.body.address
    }).then(address=>addressId=address.id).catch(error=>console.log(error));
    await db.Image_user.create({file:req.file.filename}).then(image=>imageId=image.id).catch(error=>console.log(error));
    await db.User.create({
      name: req.body.name.trim(),
      surname: req.body.surname.trim(),
      email: req.body.email.trim(),
      password: hashSync(req.body.password,10),
      role_id: 1,
      address_id: addressId,
      image_id: imageId
    }).then(()=>{
      return res.redirect("/users/login");
    }).catch(error=>console.log(error));
  } else {
    if(req.file){
      if(existsSync(`./public/img/users/${req.file.filename}`)){
      unlinkSync(`./public/img/users/${req.file.filename}`)
      }
    }
  return res.render("register", {
      errors: errors.mapped(),
      old: req.body,
      imageError: "Debes volver a cargar la imagen",
      passwordError: "Debes volver a escribir tu contraseña"
    });
  }
};