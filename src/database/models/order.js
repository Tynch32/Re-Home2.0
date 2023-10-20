module.exports = (sequelize, dataTypes) => {
  let alias = 'Order';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      total:{
        type: dataTypes.BIGINT(10),
      },  
      user_id: {
          type: dataTypes.BIGINT(10),
          allowNull: false
      }
  };
  let config = {
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: false
  }
  const Order = sequelize.define(alias, cols, config); 

  Order.associate = function (models){
      Order.belongsTo(models.User,{
          as: 'user_id',
          foreignKey: 'order_user_id'
      })
  }
  return Order
};