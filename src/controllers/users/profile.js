const { readJSON } = require("../../data/index")

module.exports = (req,res) => {
    const users = readJSON('users.json');
    const user = users.find(user => user.id === req.session.userLogin.id);

    return res.render('perfil',{
        ...user
    })
}