const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Middleware de autenticación
const authMiddleware = require('./src/middlewares/authMiddleware.js');


// Controladores
const authController = require('./src/controllers/authController');
const geoController = require('./src/controllers/geoController');
const geofenceController = require('./src/controllers/geofenceController');
const geoblockController = require('./src/controllers/geoblockController');
const userController = require('./src/controllers/userController');
const trackingController = require('./src/controllers/trackingController');
const notificationController = require('./src/controllers/notificationController');
const geoShapeController = require('./src/controllers/geoShapeController');
const configController = require('./src/controllers/configController');

// Configuración de MySQL Maria DB
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'Geocustodian', 
  });
  
// Conectar a la base de datos MySQL
connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos MySQL:', error);
    } else {
      console.log('Conexión exitosa a la base de datos MySQL');
    }
  });

// Rutas
app.post('/login', authMiddleware, authController.login);
app.post('/track', geoController.trackVehicle);
app.get('/geofences', geofenceController.getGeofences);
app.get('/geofences/:id', geofenceController.getGeofenceById);
app.get('/geoblocks', geoblockController.getGeoblocks);
app.get('/geoblocks/:id', geoblockController.getGeoblockById);
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUserById);
app.get('/tracking', trackingController.getTrackingInfo);
app.get('/tracking/:vehicleId', trackingController.getTrackingInfoByVehicleId);
app.post('/notifications', notificationController.sendNotification);
app.post('/geoShapes', geoShapeController.createGeoShape);
app.get('/geoShapes', geoShapeController.getGeoShapes);
app.get('/geoShapes/:id', geoShapeController.getGeoShapeById);
app.get('/config', configController.getConfiguration);
app.put('/config', configController.updateConfiguration);

// Ruta de inicio de sesión protegida con autenticación
app.post('/login', authMiddleware, (req, res) => {
    authController.login(req, res, connection); // Pasa la conexión a la función de controlador
  });
  
  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });