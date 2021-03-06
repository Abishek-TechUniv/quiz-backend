module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  }, {});
  return users;
};
