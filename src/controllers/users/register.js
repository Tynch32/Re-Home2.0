module.exports = async (req,res) => {
    const result = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
    const data = await result.json();
    var provinciasOrdenadas = data.provincias.sort((a, b) => a.nombre.localeCompare(b.nombre));
    const provinces = provinciasOrdenadas;
    
    return res.render('register', {provinces})
}