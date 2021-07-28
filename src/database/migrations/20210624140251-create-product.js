'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      stockMin: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stockMax: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      offer: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      season: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      brandId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genderId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      colorId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sizeId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      destroyTime:{
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};