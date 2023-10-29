const db = require("../../database/models");

module.exports = (req, res) => {
  db.Order.destroy({ where: {
    product_id: req.params.id}})
  .then(()=>{
    return res.redirect('/')
  }).catch(error=>console.log(error));
};