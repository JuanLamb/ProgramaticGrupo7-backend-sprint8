'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("payments", [{
        id: 1,
        type: "Tarjeta de credito"
   }, {
        id: 2,
        type: "Transferencia"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("payments")
  }
};
