const { DataTypes } = require('sequelize');
const sequelize = require('../../DB/database');

const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
});

module.exports = Notification;