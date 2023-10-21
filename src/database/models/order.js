module.exports = (sequelize, dataTypes) => {
  let alias = "Order";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    amount: {
      type: dataTypes.BIGINT(10),
      allowNull: false,
    },
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    tableName: "Order",
  };
  const Order = sequelize.define(alias, cols, config);
  Order.associate = function (models) {
    Order.belongsTo(models.Shopping_cart, {
      as: "shopping_cart",
      foreignKey: "shoppingcart_id",
    }),
    Order.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    })
  };
  return Order;
};
