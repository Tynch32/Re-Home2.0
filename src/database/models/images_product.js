module.exports = (sequelize, dataTypes) => {
  let alias = "Images_product";
  let cols = {
      id: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      file: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
  };

  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    tableName: 'images_product'
  };

  const Images_product = sequelize.define(alias, cols, config);

  Images_product.associate = function (models) {
    Images_product.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
    Images_product.hasMany(models.Order, {
      as: "imageOrder",
      foreignKey: "product_id",
    });
  };
  return Images_product;
};
