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
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: false
  }
  const Shopping_cart = sequelize.define(alias, cols, config); 

  Shopping_cart.associate = function (models){
      Shopping_cart.belongsTo(models.Order,{
          as: 'order_id',
          foreignKey: 'Shoppingcart_order_id'
      }),
      Shopping_cart.belongsTo(models.Product,{
        as: 'product_id',
        foreignKey: 'shoppingcart_product_id'
      })
  }
  return Shopping_cart
};