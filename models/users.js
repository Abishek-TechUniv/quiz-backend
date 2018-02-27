

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
