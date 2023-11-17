const { Sequelize } = require('sequelize');
const User = require('./user');
const Vehicle = require('./vehicle');

// Configuración de la base de datos
const sequelize = new Sequelize('mi_base_de_datos_mysql', 'mi_usuario_mysql', 'mi_contraseña_mysql', {
  host: 'mi_host_mysql',
  dialect: 'mysql',
});

// Asociaciones entre modelos (puedes personalizar según tus necesidades)
User.hasMany(Vehicle);
Vehicle.belongsTo(User);

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
