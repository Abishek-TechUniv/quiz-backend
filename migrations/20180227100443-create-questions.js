module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('questions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    questionId: {
      type: Sequelize.INTEGER,
    },
    question: {
      type: Sequelize.STRING,
    },
    optA: {
      type: Sequelize.STRING,
    },
    optB: {
      type: Sequelize.STRING,
    },
    optC: {
      type: Sequelize.STRING,
    },
    optD: {
      type: Sequelize.STRING,
    },
    correctAns: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('questions'),
};
