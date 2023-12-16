module.exports = async (req,res) => {
    const result = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
    const provincias = await result.json()
    console.log(provincias);
    return res.render('register', provincias)
}