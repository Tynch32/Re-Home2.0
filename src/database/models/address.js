module.exports = (sequelize, dataTypes) => {
    let alias = 'Address';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        city: {
            type: dataTypes.STRING(255),
        },
        province: {
            type: dataTypes.STRING(255),
        },
        country: {
            type: dataTypes.STRING(255),
        },
        address: {
            type: dataTypes.STRING(255),
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }
    const Address = sequelize.define(alias, cols, config); 
  
    Address.associate = function (models){
        Address.belongsTo(models.User,{
            as: 'user_id',
            foreignKey: 'address_user_id'
        })
    }
    return Address
  };