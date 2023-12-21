module.exports = (sequelize, dataTypes) => {
    let alias = 'Venta';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.BIGINT(255),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.BIGINT(255),
            allowNull: false
        },
        precio: {
            type: dataTypes.BIGINT(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "ventas",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Venta = sequelize.define(alias, cols, config); 

    Venta.associate = function (models){
        Venta.belongsTo(models.Product,{
            as: 'ventas_product',
            foreignKey: 'product_id'
        })
    }

    return Venta

  };