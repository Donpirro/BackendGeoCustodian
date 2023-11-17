const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Geofence = sequelize.define('Geofence', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
});

module.exports = Geofence;