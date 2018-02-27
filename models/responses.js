module.exports = (sequelize, DataTypes) => {
  const responses = sequelize.define('responses', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    responseId: {
      type: DataTypes.STRING,
      unique: true,
    },
    response: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  return responses;
};
