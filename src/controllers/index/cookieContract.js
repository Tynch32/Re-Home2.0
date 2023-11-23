module.exports = (req, res) => {
    let valueCookie=true;
    res.cookie('grupoReHome10_cookie',valueCookie,{
      maxAge : 1000 * 60 * 60})
    return res.redirect('/');
}
