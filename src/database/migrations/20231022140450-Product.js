'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      discount:{
        type:Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "categories"
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};