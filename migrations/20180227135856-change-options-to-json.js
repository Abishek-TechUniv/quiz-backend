

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('questions', 'optA')
      .then(queryInterface.removeColumn('questions', 'optB')
        .then(queryInterface.removeColumn('questions', 'optC')
          .then(queryInterface.removeColumn('questions', 'optD')
            .then(queryInterface.addColumn('questions', 'options', { type: Sequelize.JSON })))));
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('questions', 'options')
      .then(queryInterface.addColumn(
        'questions', 'optA',
        { type: Sequelize.STRING },
      ).then(queryInterface.addColumn(
        'questions', 'optB',
        { type: Sequelize.STRING },
      )).then(queryInterface.addColumn(
        'questions', 'optC',
        { type: Sequelize.STRING },
      )).then(queryInterface.addColumn(
        'questions', 'optD',
        { type: Sequelize.STRING },
      )));
  },
};
