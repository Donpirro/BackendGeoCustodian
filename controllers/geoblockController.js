// Supongamos que tenemos un array para almacenar geobloques como base de datos temporal
let geoblocks = [
    { id: 1, name: 'Geobloque 1', latitude: 123.456, longitude: -789.012, radius: 50 },
    { id: 2, name: 'Geobloque 2', latitude: 456.789, longitude: -123.012, radius: 75 },
  ];
  
  // Obtener todos los geobloques
  exports.getGeoblocks = (req, res) => {
    res.json(geoblocks);
  };
  
  // Obtener un geobloque por ID
  exports.getGeoblockById = (req, res) => {
    const { id } = req.params;
    const geoblock = geoblocks.find((geo) => geo.id === parseInt(id));
  
    if (geoblock) {
      res.json(geoblock);
    } else {
      res.status(404).json({ message: 'Geobloque no encontrado' });
    }
  };