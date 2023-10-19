'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Status.init({
    file: DataTypes.INTEGER,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Images_product',
  });
  return Images_product;
};