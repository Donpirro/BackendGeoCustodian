const express = require('express');
const router = express.Router();
const geofenceController = require('../controllers/geofenceController');

// Ruta para obtener todas las geocercas
router.get('/', geofenceController.getGeofence);

// Ruta para obtener una geocerca por ID
router.get('/:id', geofenceController.getGeofenceById);

// Ruta para crear una nueva geocerca
router.post('/', geofenceController.createGeofence);

module.exports = router;