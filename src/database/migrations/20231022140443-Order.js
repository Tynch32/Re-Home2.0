'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "products"
          }
        }
      },
      amount:{
        type:Sequelize.INTEGER,
        default:0
      },
      shoppingcart_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "shopping_cart"
          }
        },
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull : false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull : false
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};