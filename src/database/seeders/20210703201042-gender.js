'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("genders", [{
        id: 1,
        type: "Hombre"
   }, {
        id: 2,
        type: "Mujer"
   }, {
        id: 3,
        type: "Unisex"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("genders")
  }
};
