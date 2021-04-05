'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    content: {
      type: DataTypes.STRING(280),
      allowNull: false,
    },
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Stories" }
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Story, { foreignKey: "storyId" });
  };
  return Comment;
};