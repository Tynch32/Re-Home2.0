module.exports = (sequelize, dataTypes) => {
  let alias = 'Category';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      name: {
          type: dataTypes.STRING(255),
          allowNull: false
      },
      image: {
          type: dataTypes.STRING(255),
      }
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Category = sequelize.define(alias, cols, config);

  return Category
};