const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Controladores
const geoController = require('./controllers/geoController');
const geofenceController = require('./controllers/geofenceController');
const geoblockController = require('./controllers/geoblockController');

// Rutas
app.post('/track', geoController.trackVehicle);
app.get('/geofences', geofenceController.getGeofences);
app.get('/geofences/:id', geofenceController.getGeofenceById);
app.get('/geoblocks', geoblockController.getGeoblocks);
app.get('/geoblocks/:id', geoblockController.getGeoblockById);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});