module.exports = (sequelize, dataTypes) => {
  let alias = 'Shopping_cart';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
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
    Shopping_cart.belongsTo(models.Order,{
        as: 'order',
        foreignKey: 'shoppingcart_id'
    }),
    Shopping_cart.belongsTo(models.Product,{
            as: 'product',
            foreignKey: 'product_id'
    })
  };
  return Shopping_cart
};