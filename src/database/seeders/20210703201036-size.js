'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("sizes", [{
        id: 1,
        type: "XL"
   }, {
        id: 2,
        type: "L"
   }, {
        id: 3,
        type: "M"
   }, {
        id: 4,
        type: "S"
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sizes")
  }
};
