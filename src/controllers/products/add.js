const {readJSON} = require("../../data/index");
const categories = readJSON('../data/categories.json');

module.exports = (req,res) => {

        return res.render('productAdd', { categories });
        
}