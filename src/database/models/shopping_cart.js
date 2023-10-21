module.exports = (sequelize, dataTypes) => {
  let alias = 'Shopping_cart';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      amount: {
          type: dataTypes.BIGINT(10),
          allowNull: false
      }
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false,
      tableName:'shopping_cart'
  }
  const Shopping_cart = sequelize.define(alias, cols, config); 

  Shopping_cart.associate = function (models){
      Shopping_cart.belongsTo(models.Product,{
          as: 'product_shoppingcart',
          foreignKey: 'shoppingcart_product_id'
      })
  }
  return Shopping_cart
};