const googleMapsService = require('../service/googleMapsService');
const Geofence = require('../models/geofence');

// Obtener todas las geocercas
exports.getGeofence = async (req, res) => {
  try {
    const geofence = await Geofence.findAll();
    res.json(geofence);
  } catch (error) {
    console.error('Error al obtener las geocercas:', error);
    res.status(500).json({ error: 'Error al obtener las geocercas.' });
  }
};

// Obtener una geocerca por ID
exports.getGeofenceById = async (req, res) => {
  const { id } = req.params;

  try {
    const geofence = await Geofence.findByPk(id);

    if (geofence) {
      res.json(geofence);
    } else {
      res.status(404).json({ message: 'Geocerca no encontrada.' });
    }
  } catch (error) {
    console.error('Error al obtener la geocerca por ID:', error);
    res.status(500).json({ error: 'Error al obtener la geocerca por ID.' });
  }
};

const createGeofence = async (req, res) => {
  const address = req.body.address;
  const geofenceName = req.body.name || 'Nombre predeterminado';

  try {
    // Obtener las coordenadas desde Google Maps
    const location = await googleMapsService.geocodeAddress(address);

    // Crear una nueva geocerca en la base de datos utilizando Sequelize
    const newGeofence = await Geofence.create({
      name: geofenceName,
      latitude: location.lat,
      longitude: location.lng,
    });

    // Respondemos con un mensaje de éxito y la información de la nueva geocerca
    res.status(200).json({ message: 'Geocerca creada exitosamente.', geofence: newGeofence });
  } catch (error) {
    console.error(error);

    // Respondemos con un mensaje de error
    res.status(500).json({ error: 'Error al crear la geocerca.' });
  }
};

module.exports = { createGeofence };
