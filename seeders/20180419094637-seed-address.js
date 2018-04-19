'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      address: '711-2880 Nulla St',
      city: 'St, Mississippi',
      zipcode:'96522'
    },{
      address: '8562 Fusce Rd',
      city: 'Nebraska',
      zipcode:'20620'
    },{
      address: '606-3727 Ullamcorper Street',
      city: 'Roseville',
      zipcode:'11523'
    },{
      address: '867-859 Sit Rd',
      city: 'New York',
      zipcode:'39531'
    },{
      address: '7292 Dictum Av',
      city: 'San Antonio',
      zipcode:'47096'
    },{
      address: '651-8679 Sodales Av',
      city: 'Tamuning',
      zipcode:'10855'
    },{
      address: '191-103 Integer Rd',
      city: 'Corona New Mexico',
      zipcode:'08219'
    },{
      address: '2508 Dolor. Av',
      city: 'Muskegon KY',
      zipcode:'12482'
    },{
      address: '666-4366 Lacinia Avenue',
      city: 'Ohio',
      zipcode:'19253'
    },{
      address: 'Lacinia Road',
      city: 'San Bernardino',
      zipcode:'09289'
    }], {});
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
