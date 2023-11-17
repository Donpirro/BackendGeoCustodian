// Supongamos que tenemos un array para almacenar información de seguimiento como base de datos temporal
let vehicleTracking = [
    { vehicleId: 1, timestamp: new Date(), insideAreas: [] },
    { vehicleId: 2, timestamp: new Date(), insideAreas: [] },
  ];
  
  // Obtener la información de seguimiento de todos los vehículos
  exports.getTrackingInfo = (req, res) => {
    res.json(vehicleTracking);
  };
  
  // Obtener la información de seguimiento de un vehículo por ID
  exports.getTrackingInfoByVehicleId = (req, res) => {
    const { vehicleId } = req.params;
    const trackingInfo = vehicleTracking.find((info) => info.vehicleId === parseInt(vehicleId));
  
    if (trackingInfo) {
      res.json(trackingInfo);
    } else {
      res.status(404).json({ message: 'Información de seguimiento no encontrada para el vehículo' });
    }
  };