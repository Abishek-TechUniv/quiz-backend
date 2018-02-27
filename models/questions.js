module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    options: DataTypes.JSON,
    correctAns: DataTypes.STRING,
  }, {});
  return questions;
};
