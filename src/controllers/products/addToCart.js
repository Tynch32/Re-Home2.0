const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
  const users = readJSON("users.json");
  const products = readJSON("products.json");
  var user = null;
  var usersModify=null;
  if (req.session.userLogin) {
    user = users.find((user) => user.id === req.session.userLogin.id);
  }
  const product = req.params.id;
  if (user) {
    let productToAdd = products.find((element) => element.id == product);
    if (productToAdd) {
      if (!user.shoppingCart.find((element) => element.id == productToAdd.id)) {
        usersModify = users.map(element=>{
            if(element.id==req.session.userLogin.id){
                element.shoppingCart.push(productToAdd.id);
            }
            return element;
        });
      }
    }
    writeJSON(usersModify,'users.json');
    return res.redirect('/'); 
  } else {
    return res.redirect('/users/login');
  }
};
