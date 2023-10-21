module.exports = (sequelize, dataTypes) => {
  let alias = "Role";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
    tableName: "roles",
  };
  const Role = sequelize.define(alias, cols, config);
  Role.associate = function (models) {
    Role.hasMany(models.User, {
      as: "user_role",
      foreignKey: "role_id",
    });
  };
  return Role;
};
