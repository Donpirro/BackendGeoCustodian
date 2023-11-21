const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const dotenv = require('dotenv');
//const geofenceRoutes = require('./src/routes/geofenceRoutes');
const authMiddleware = require('./src/middlewares/authMiddleware'); // Importación del middleware de autenticación
const authController = require('./src/controllers/authController');
const googleMapsService = require('./src/service/googleMapsService'); // Asegúrate de que el path sea correcto
// ... Otras importaciones ...
const configController = require('./src/controllers/configController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de MySQL
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'y[cJWL2O*i(l4-NB',
  database: 'geocustodian',
});

// Rutas
//app.use('/geofence', geofenceRoutes);
// ... Otras rutas ...

// Ruta de inicio de sesión protegida con autenticación
app.post('/login', authMiddleware, (req, res) => {
  authController.login(req, res, pool); // Pasar el pool de conexiones a la función de controlador
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Ejemplo de uso
const exampleUsage = async () => {
  const address = '1600 Amphitheatre Parkway, Mountain View, CA';

  try {
    // Obtener las coordenadas desde Google Maps
    const location = await googleMapsService.geocodeAddress(address);

    // Ejemplo de consulta MySQL utilizando el pool con manejo de promesas
    const queryPromise = (sql, values) => {
      return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    };

    // Uso de la consulta MySQL con manejo de promesas
    const results = await queryPromise('SELECT * FROM geofences');
    console.log('Resultados de la consulta:', results);

    console.log(location);
  } catch (error) {
    console.error('Error al obtener las coordenadas:', error);
    // Manejar el error adecuadamente, dependiendo del contexto
  }
};

// Llamada a la función de ejemplo
exampleUsage();
