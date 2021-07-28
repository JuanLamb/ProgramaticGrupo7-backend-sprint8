'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("states", [{
        id: 1,
        description: "Procesando pago"
   }, {
        id: 2,
        description: "Preparando pedido"
   }, {
        id: 3,
        description: "En camino"
   }, {
        id: 4,
        description: "Recibido"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("states")
  }
};
