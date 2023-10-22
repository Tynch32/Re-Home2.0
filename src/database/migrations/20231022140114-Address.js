'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('addresses');
  }
};