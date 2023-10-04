const { v4: uuidv4 } = require('uuid');

const Product = function ({name,category,price,discount,description, image, images}) {

    this.id = uuidv4();
    this.name = name.trim();
    this.category = category;
    this.price = +price;
    this.discount = (+discount>99)?99:((+discount<0)?0:+discount);
    this.description = description.trim();
    this.image = image;
    this.images = images;
    this.createAt = new Date;
}

module.exports = Product