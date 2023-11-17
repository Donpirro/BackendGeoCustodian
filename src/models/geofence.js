const { DataTypes } = require('sequelize');
const sequelize = require('../../DB/database');

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
  geometry: {
    type: DataTypes.GEOMETRY('GEOMETRY', 4326), // 'GEOMETRY' admite polígonos y círculos
    allowNull: false,
  },
});

module.exports = Geofence;