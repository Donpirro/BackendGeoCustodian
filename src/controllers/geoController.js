// Supongamos que tenemos un array para almacenar la información de geolocalización
let geoData = [];

// Función para realizar un seguimiento de la ubicación de un vehículo
exports.trackVehicle = (req, res) => {
  const { vehicleId, latitude, longitude } = req.body;

  // Supongamos que cada punto de ubicación tiene un ID único generado automáticamente
  const id = geoData.length + 1;

  const newGeoPoint = {
    id,
    vehicleId,
    latitude,
    longitude,
    timestamp: new Date(),
  };

  geoData.push(newGeoPoint);
  res.status(201).json(newGeoPoint);
};

// Función para obtener la información de seguimiento de un vehículo
exports.getTrackingInfoByVehicleId = (req, res) => {
  const { vehicleId } = req.params;
  const vehicleTrackingInfo = geoData.filter((point) => point.vehicleId === vehicleId);

  if (vehicleTrackingInfo.length > 0) {
    res.json(vehicleTrackingInfo);
  } else {
    res.status(404).json({ message: 'No se encontró información de seguimiento para el vehículo especificado.' });
  }
};