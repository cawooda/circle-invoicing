const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sheet extends Model {}

Sheet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {},
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "sheet",
  }
);

module.exports = Sheet;
