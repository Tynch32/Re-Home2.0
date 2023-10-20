module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
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
      surname: {
          type: dataTypes.STRING(255),
          allowNull: false
      },
      email: {
          type: dataTypes.STRING(255),
          allowNull: false
      },
      password:{
          type: dataTypes.STRING(255),
          allowNull: false,
      }
  };
  let config = {
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: false
  }
  const User = sequelize.define(alias, cols, config); 

  User.associate = function (models){
      User.belongsTo(models.Role,{
          as: 'role_id',
          foreignKey: 'user_role_id'
      }),
      User.belongsTo(models.Role,{
        as: 'image_id',
        foreignKey: 'user_image_id'
      })
  }
  return User
};