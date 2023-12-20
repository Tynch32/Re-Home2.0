const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {

  const errors = validationResult(req);
  console.log(req.body);
  if(errors.isEmpty()){
    let nuevosValores={
      name:req.body.name,
      price:req.body.price,
      discount:req.body.discount||0,
      description:req.body.description,
      category_id:req.body.category,
      updated_at: new Date()
    }
      db.Product.update(nuevosValores,{
        where:{
          id:req.params.id
        }
      }).then(()=>{
        if(req.files.image) {
            db.Images_product.create({
            file: req.files.image[0].filename,
            product_id: req.params.id
          })
        }
        if(req.files.images) {
          req.files.images.forEach(file => {
          db.Images_product.create({
            file: file.filename,
            product_id: req.params.id
            })
          })
        }
        return res.redirect('/admin')
      }).catch(error=>console.log(error));
  }else{
        
        (req.files.image && existsSync(`./public/img/products/${req.files.image[0].filename }`)) && unlinkSync(`./public/img/products/${req.files.image[0].filename }`);
        
        if(req.files.images) {
            req.files.images.forEach(file => {
                existsSync(`./public/img/products/${file.filename}`) && unlinkSync(`./public/img/products/${file.filename}`)
            })
        }
        db.Category.findAll({
            order: [
                ['name', 'ASC']
            ]
        }).then(categories=> {
            return res.render('productAdd',{
                categories,
                errors : errors.mapped(),
                old : req.body
            });
        }).catch(error=>console.log(error))
  }
};
