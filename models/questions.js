module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    optA: DataTypes.STRING,
    optB: DataTypes.STRING,
    optC: DataTypes.STRING,
    optD: DataTypes.STRING,
    correctAns: DataTypes.STRING,
  }, {});
  questions.associate = function (models) {
    // associations can be defined here
  };
  return questions;
};
