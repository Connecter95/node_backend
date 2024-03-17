'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50]
        }
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50]
        }
      },
      address: {
        type: Sequelize.STRING(150),
        validate: {
          len: [0, 150]
        }
      },
      email: {
        type: Sequelize.STRING(60),
        validate: {
          isEmail: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};