// Supongamos que tenemos un array para almacenar geocercas y geobloques como base de datos temporal
let geoShapes = [];

// Crear una nueva forma geoespacial (círculo o polígono)
exports.createGeoShape = (req, res) => {
  // Extraer los datos del cuerpo de la solicitud (request body)
  const { type, shape, color } = req.body;

  // Supongamos que cada forma tiene un ID único generado automáticamente
  const id = geoShapes.length + 1;

  // Crear un nuevo objeto que representa la forma geoespacial
  const newGeoShape = {
    id,
    type,  // Tipo de forma (círculo o polígono)
    shape, // Datos específicos de la forma (por ejemplo, radio para círculo o vértices para polígono)
    color, // Color de la forma
  };

  // Agregar la nueva forma al array de geocercas y geobloques
  geoShapes.push(newGeoShape);

  // Responder con la nueva forma creada y un código de estado 201 (creado exitosamente)
  res.status(201).json(newGeoShape);
};

// Obtener todas las formas geoespaciales
exports.getGeoShapes = (req, res) => {
  // Responder con todas las formas almacenadas en el array
  res.json(geoShapes);
};

// Obtener una forma geoespacial por ID
exports.getGeoShapeById = (req, res) => {
  // Extraer el ID de los parámetros de la solicitud (request parameters)
  const { id } = req.params;

  // Buscar la forma geoespacial en el array por ID
  const geoShape = geoShapes.find((shape) => shape.id === parseInt(id));

  // Verificar si se encontró la forma y responder en consecuencia
  if (geoShape) {
    // Responder con la forma geoespacial encontrada
    res.json(geoShape);
  } else {
    // Responder con un código de estado 404 (no encontrado) y un mensaje de error
    res.status(404).json({ message: 'Forma geoespacial no encontrada' });
  }
};
