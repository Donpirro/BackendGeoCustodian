// Supongamos que tenemos una configuración almacenada en una base de datos
let configuration = {
  notificationThreshold: 10, // Umbral para enviar notificaciones (en minutos)
  defaultRadius: 50, // Radio predeterminado para geocercas y geobloques
};

// Obtener la configuración actual
exports.getConfiguration = (req, res) => {
  res.json(configuration);
};

// Actualizar la configuración
exports.updateConfiguration = (req, res) => {
  const { notificationThreshold, defaultRadius } = req.body;

  // Actualizar la configuración según los parámetros proporcionados
  configuration.notificationThreshold = notificationThreshold;
  configuration.defaultRadius = defaultRadius;

  res.json(configuration);
};
