module.exports = (sequelize, dataTypes) => {
  let alias = "Shopping_cart";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    tableName: "shopping_cart",
  };
  const Shopping_cart = sequelize.define(alias, cols, config);

  Shopping_cart.associate = function (models) {
    Shopping_cart.hasMany(models.User, {
      as: "user_shoppingcart",
      foreignKey: "shoppingcart_id",
    });
    Shopping_cart.hasMany(models.Order, {
      as: "order_shoppingcart",
      foreignKey: "shoppingcart_id",
    });
  };
  return Shopping_cart;
};
