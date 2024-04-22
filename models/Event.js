const { Sequelize, DataTypes } = require("sequelize");
const { sequalize } = require("../config/db");

const Event = sequalize.define("Event", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tickets: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
module.exports = { Event };
