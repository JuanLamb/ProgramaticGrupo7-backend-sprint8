'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("colors", [{
        id: 1,
        color: "Azul"
   }, {
        id: 2,
        color: "Rojo"
   }, {
        id: 3,
        color: "Amarillo"
   }, {
        id: 4,
        color: "Negro"
   }, {
        id: 5,
        color: "Verde"
   }, {
        id: 6,
        color: "Blanco"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("colors")
  }
};
