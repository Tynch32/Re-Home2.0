function addPuntos(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
module.exports=addPuntos;