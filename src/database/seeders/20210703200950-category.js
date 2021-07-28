'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("categories", [{
        id: 1,
        name: "Escalada"
   }, {
        id: 2,
        name: "Camperas"
   }, {
        id: 3,
        name: "Calzado"
   }, {
        id: 4,
        name: "Mochilas"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories")
  }
};
