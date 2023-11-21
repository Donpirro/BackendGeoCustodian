const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  host: '127.0.0.1',
  user: 'root',
  password: 'y[cJWL2O*i(l4-NB',
  database: 'geocustodian',
});

const Geofence = sequelize.define('Geofence', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING(50), allowNull: false 
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  pointLocation: { type: DataTypes.GEOMETRY('POINT'), allowNull: true, 
  defaultValue: sequelize.fn('ST_GeomFromText', 'POINT(0 0)') 
  },
  lineStringLocation: {
    type: DataTypes.GEOMETRY('LINESTRING'),
    allowNull: true,
    defaultValue: sequelize.fn('ST_GeomFromText', 'LINESTRING(1 1, 2 2, 3 3)')
  },
  polygonLocation: {
    type: DataTypes.GEOMETRY('POLYGON'),
    allowNull: true,
    defaultValue: sequelize.fn('ST_GeomFromText', 'POLYGON((1 1, 2 2, 3 1, 1 1))')
  },
});

module.exports = Geofence;