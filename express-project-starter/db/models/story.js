'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    imageSrc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }
  }, {});
  Story.associate = function(models) {
    Story.belongsTo(models.User, { foreignKey: "userId" });
    Story.hasMany(models.Comment, { foreignKey: "storyId" });
    Story.hasMany(models.Clap, { foreignKey: "storyId" });
  };
  return Story;
};