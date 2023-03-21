'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{

      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'HoiDanIt',
      lastName: 'Eric',
      address: 'USA',
      phonenumber: '0987654321',
      gender: 1,
      image: 'none',
      roleId: 'R1',
      positionId: 'none',


      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
