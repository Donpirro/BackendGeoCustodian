const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Vehicle = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  registrationNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  
});

module.exports = Vehicle;