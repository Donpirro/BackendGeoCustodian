const { Sequelize } = require('sequelize');
const User = require('./user');
const Vehicle = require('./vehicle');

const sequelize = new Sequelize({
  host: '127.0.0.1',
  user: 'root',
  password: 'y[cJWL2O*i(l4-NB',
  database: 'geocustodian',
});

// Importa los modelos
const User = require('./user');
const Vehicle = require('./vehicle');
const Geofence = require('./geofence');
const Tracking = require('./tracking');
const Notification = require('./notification');

// Asociaciones entre modelos
User.hasMany(Vehicle);
Vehicle.belongsTo(User);

// ... Otras asociaciones si es necesario

// Verificar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

testConnection();

module.exports = sequelize;