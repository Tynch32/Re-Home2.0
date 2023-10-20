module.exports = (sequelize, dataTypes) => {
  let alias = 'Product';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      name:{
        type: dataTypes.STRING(255),
        allowNull: false
      },
      price:{
        type: dataTypes.BIGINT(10),
        allowNull: false,
      },
      discount:{
        type: dataTypes.BIGINT(10)
      },
      description:{
        type: dataTypes.STRING(255),
        allowNull: false
      }
  };
  let config = {
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: false
  }
  const Product = sequelize.define(alias, cols, config); 

  Product.associate = function (models){
      Product.belongsTo(models.Category,{
          as: 'category_id',
          foreignKey: 'product_category_id'
      })
  }
  return Product
};