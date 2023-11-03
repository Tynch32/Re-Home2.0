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
      },
      address_id:{
        type: dataTypes.BIGINT(10).UNSIGNED,
        allowNull: false
      },
      shoppingcart_id:{
        type: dataTypes.BIGINT(10).UNSIGNED,
        allowNull: false
      }
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const User = sequelize.define(alias, cols, config); 

  User.associate = function (models){
      User.belongsTo(models.Role,{
          as: 'roleId',
          foreignKey: 'role_id'
      }),
      User.belongsTo(models.Image_user,{
        as: 'imageId',
        foreignKey: 'image_id'
      }),
      User.belongsTo(models.Shopping_cart,{
        as: 'shoppingcartId',
        foreignKey: 'shoppingcart_id'
      }),
      User.belongsTo(models.Address,{
        as: 'addressId',
        foreignKey: 'address_id'
      })
  }
  return User
};