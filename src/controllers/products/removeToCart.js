const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
  const users = readJSON("users.json");
  var user = null;
  var usersModify=null;
  var productToRemove = req.params.id;
  if (req.session.userLogin) {
    user = users.find((user) => user.id === req.session.userLogin.id);
  }
  const product = req.params.id;
  if (user) {
    usersModify=users.map(element=>{
      if(element.id==req.session.userLogin.id){
          element.shoppingCart=element.shoppingCart.filter(product=>product!=productToRemove);
      }
      return element;
  });
    writeJSON(usersModify,'users.json');
    return res.redirect('/'); 
  } else {
    return res.redirect('/users/login');
  }
};