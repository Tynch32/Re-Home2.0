module.exports = (sequelize, dataTypes) => {
  let alias = "Image_user";
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
    }
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    tableName: "image_user",
  };
  const Image_user = sequelize.define(alias, cols, config);

  Image_user.associate = function (models) {
    Image_user.hasMany(models.User, {
      as: "user_image",
      foreignKey: "image_id",
    });
  };

  return Image_user;
};
