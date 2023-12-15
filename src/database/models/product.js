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
        type: dataTypes.BIGINT(20),
        allowNull: false,
      },
      discount:{
        type: dataTypes.BIGINT(10)
      },
      description:{
        type: dataTypes.STRING(255),
        allowNull: false
      },
      category_id:{
        type: dataTypes.BIGINT(10)
      }
  };

  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false,
      tableName: 'products'
  }

  const Product = sequelize.define(alias, cols, config); 

  Product.associate = function (models){
      Product.belongsTo(models.Category,{
          as: 'product_category',
          foreignKey: 'category_id'
      }),
      Product.hasMany(models.Order,{
        as: 'order_product',
        foreignKey: 'product_id'
      }),
      Product.hasMany(models.Images_product,{
        as: 'product_image',
        foreignKey: 'product_id'
      })
  }

  return Product

};