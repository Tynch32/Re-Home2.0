const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const users = readJSON('users.json');
    const user = users.find(user => user.id === req.session.userLogin.id);

    if(user){
        return res.render('profile',{
        ...user
        })
    }else{
        return res.redirect('login');
    }
}