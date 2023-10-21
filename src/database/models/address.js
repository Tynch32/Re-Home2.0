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
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName:'addresses'
    }
    const Address = sequelize.define(alias, cols, config); 
    return Address
  };