const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    hooks: {},
    sequelize,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;