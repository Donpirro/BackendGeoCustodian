const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Middleware de autenticación
const authMiddleware = require('./middlewares/authMiddleware');


// Controladores
const authController = require('./controllers/authController');
const geoController = require('./controllers/geoController');
const geofenceController = require('./controllers/geofenceController');
const geoblockController = require('./controllers/geoblockController');
const userController = require('./controllers/userController');
const trackingController = require('./controllers/trackingController');
const notificationController = require('./controllers/notificationController');
const geoShapeController = require('./controllers/geoShapeController');
const configController = require('./controllers/configController');

// Configuración de MySQL
const connection = mysql.createConnection({
    host: 'mi_host_mysql',
    user: 'mi_usuario_mysql',
    password: 'mi_contraseña_mysql',
    database: 'mi_base_de_datos_mysql',
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