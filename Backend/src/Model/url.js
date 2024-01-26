const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Url = db.define("Url", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  short: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  count:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = Url;
