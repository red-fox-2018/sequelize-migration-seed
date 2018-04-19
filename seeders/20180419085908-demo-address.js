'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
    [
      {
        street: '711-2880 Nulla St',
        city: 'Mississippi',
        zip_code: '96522',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        street: '8562 Fusce Rd',
        city: 'Nebraska',
        zip_code: '20620',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        street: '867-859 Sit Rd',
        city: 'New York',
        zip_code: '39531',
        createdAt: new Date(),
        updatedAt: new Date()
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
