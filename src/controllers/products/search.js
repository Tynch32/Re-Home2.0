const { readJSON } = require("../../data");

module.exports = (req, res) => {
  
  const products = readJSON('products.json');
  
  const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
		
  return res.render('search',{
			results,
			keywords : req.query.keywords
		})
};
