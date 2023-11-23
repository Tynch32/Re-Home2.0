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
    product_id: {
      type: dataTypes.BIGINT(10),
      allowNull: false
    },
    user_id: {
      type: dataTypes.BIGINT(10),
      allowNull: false
    }
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    tableName: "orders",
  };
  const Order = sequelize.define(alias, cols, config);
  Order.associate = function (models) {
    Order.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    })
    Order.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
    })
  };
  return Order;
};
