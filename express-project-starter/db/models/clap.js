'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clap = sequelize.define('Clap', {
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Stories" }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }
  }, {});
  Clap.associate = function(models) {
    Clap.belongsTo(models.User, { foreignKey: "userId" });
    Clap.belongsTo(models.Story, { foreignKey: "storyId" });
  };
  return Clap;
};