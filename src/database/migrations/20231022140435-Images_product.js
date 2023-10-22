'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images_product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "products"
          }
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull : false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull : false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('images_product');
  }
};