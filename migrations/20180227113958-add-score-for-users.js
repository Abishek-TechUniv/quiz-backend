
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'score', { type: Sequelize.INTEGER, defaultValue: 0 }),

  down: (queryInterface) => {
    queryInterface.removeColumn('users', 'score');
  },
};
