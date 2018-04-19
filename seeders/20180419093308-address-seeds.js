'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Addresses', [{
        id: 1,
        street:"711-2880 Nulla St",
        city :123,
        zip_code:96522,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id: 2,
        street:"8562 Fusce Rd",
        city :234,
        zip_code:34234,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id: 3,
        street:"867-859 Sit Rd",
        city :345,
        zip_code:456546,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id: 4,
        street:"7292 Dictum Av",
        city :666,
        zip_code:7686786,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id: 5,
        street:"67292 Dictum Av",
        city :456,
        zip_code:12312,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id: 6,
        street:"651-8679 Sodales Av",
        city :8888,
        zip_code:23423,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id: 7,
        street:"191-103 Integer Rd",
        city :567,
        zip_code:456546,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
