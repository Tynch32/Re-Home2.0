const productsJson = readJSON('products.json');
const ultimoId = productsJson[productsJson.length-1].id;

const Product = function ({name,description,price,description,category,image}) {

    this.id = ultimoId+1;
    this.name = name.trim();
    this.description = description;
    this.price = +price;
    this.description = description.trim();
    this.image = null;
    this.category=category.trim();
    this.createAt = new Date;
}

module.exports = Product