const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Excel extends Model {}

Excel.init(
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
    underscored: true,
    modelName: "excel",
  }
);

module.exports = Excel;
