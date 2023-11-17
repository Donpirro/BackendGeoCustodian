// Supongamos que tenemos un array para almacenar geocercas como base de datos temporal
let geofences = [
    { id: 1, name: 'Geocerca 1', latitude: 123.456, longitude: -789.012, radius: 50 },
    { id: 2, name: 'Geocerca 2', latitude: 456.789, longitude: -123.012, radius: 75 },
  ];
  
  // Obtener todas las geocercas
  exports.getGeofences = (req, res) => {
    res.json(geofences);
  };
  
  // Obtener una geocerca por ID
  exports.getGeofenceById = (req, res) => {
    const { id } = req.params;
    const geofence = geofences.find((geo) => geo.id === parseInt(id));
  
    if (geofence) {
      res.json(geofence);
    } else {
      res.status(404).json({ message: 'Geocerca no encontrada' });
    }
  };