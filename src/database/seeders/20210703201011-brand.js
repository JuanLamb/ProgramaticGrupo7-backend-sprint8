'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("brands", [{
        id: 1,
        name: "Edelweiss"
   }, {
        id: 2,
        name: "Black Diamond"
   }, {
        id: 3,
        name: "Salomon"
   }, {
        id: 4,
        name: "Marmot"
   }, {
        id: 5,
        name: "Coleman"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("brands")
  }
};
