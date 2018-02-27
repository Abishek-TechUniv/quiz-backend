

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('responses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    responseId: {
      type: Sequelize.STRING,
      unique: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    questionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    response: {
      type: Sequelize.STRING,
      allowNull: false,
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
  down: queryInterface => queryInterface.dropTable('responses'),
};
