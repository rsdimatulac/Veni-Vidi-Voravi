'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: { 
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    emailAddress: {
      type: DataTypes.STRING(75),
      allowNull: false,
      unique: true
    },
    about: {
      type: DataTypes.TEXT,
    },
    hashedPW: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    profilePic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Story, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Clap, { foreignKey: "userId" });
    User.hasMany(models.Follow, { foreignKey: "userId" })
  };
  return User;
};