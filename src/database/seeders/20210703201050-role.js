'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("roles", [{
        id: 1,
        name: "Usuario"
   }, {
        id: 2,
        name: "Administrador"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles")
  }
};
