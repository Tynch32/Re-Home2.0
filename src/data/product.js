//const productsJson = readJSON('products.json');
//const ultimoId = productsJson[productsJson.length-1].id;
const {v4:uuidv4}= require("uuid")

const Product = function ({name,price,description,category}) {

    this.id = uuidv4()
    this.name = name.trim();
    this.price = +price;
    this.description = description.trim();
    this.image = null;
    this.category=category.trim();
    this.createAt = new Date;
    
}

module.exports = Product