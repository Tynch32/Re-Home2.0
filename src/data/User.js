const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({nombre,apellido,domicilio,ciudad,provincia,pais,email,contraseña}) {
    this.id = uuidv4();
    this.nombre = nombre.trim();
    this.apellido = apellido.trim();
    this.domicilio = domicilio.trim();
    this.ciudad = ciudad.trim();
    this.provincia = provincia.trim();
    this.pais = pais.trim();
    this.email = email.trim();
    this.contraseña = hashSync(contraseña,10);
    this.rol = 'user';
    this.createAt = new Date;
}

module.exports = User