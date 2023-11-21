require('dotenv').config();

// Accede a la clave API de Google Maps desde la variable de entorno
const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

// Configuración del geocodificador
const NodeGeocoder = require('node-geocoder');
const geocoder = NodeGeocoder({
  provider: 'google',
  apiKey: googleMapsApiKey,
});

module.exports = geocoder;
