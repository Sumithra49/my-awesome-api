const { sequelize } = require("../config/db");
const { DataTypes, Sequelize } = require("sequelize");

const UserModel = sequelize.define(
  "user",
  {
    email: { type: DataTypes.STRING, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: true },
    username: { type: DataTypes.STRING, allowNull: true },
  },
  {
    timestamps: false,
  }
);
module.exports = { UserModel };
