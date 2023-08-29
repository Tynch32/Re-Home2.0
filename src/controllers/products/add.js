 const data = require("../../data")
 const read = data.readJSON

module.exports = (req,res) => {
   
    const categories = read('categories.json');
    //console.log(categories)
    return res.render('productAdd',{categories})
}