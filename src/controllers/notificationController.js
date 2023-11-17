// Supongamos que tenemos un servicio externo para enviar notificaciones
const notificationService = require('../service/notificationService');

// Enviar notificación a un usuario
exports.sendNotification = (req, res) => {
  const { userId, message } = req.body;

  // Supongamos que tienes una función en tu servicio de notificaciones
  // que enviará un mensaje al usuario identificado por su ID
  notificationService.sendNotification(userId, message);

  res.json({ message: 'Notificación enviada correctamente' });
};