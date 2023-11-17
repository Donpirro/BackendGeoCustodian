const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tracking = sequelize.define('Tracking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  
});

module.exports = Tracking;