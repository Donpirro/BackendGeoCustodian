// Supongamos que tienes una función para enviar mensajes de texto
function sendTextMessage(phoneNumber, message) {
    // Lógica para enviar mensajes de texto
    console.log(`Enviando mensaje de texto a ${phoneNumber}: ${message}`);
  }
  
  // Supongamos que tienes una función para enviar notificaciones push
  function sendPushNotification(deviceToken, message) {
    // Lógica para enviar notificaciones push
    console.log(`Enviando notificación push a ${deviceToken}: ${message}`);
  }
  
  // Función para enviar una notificación de texto y push
  exports.sendNotification = (phoneNumber, deviceToken, message) => {
    sendTextMessage(phoneNumber, message);
    sendPushNotification(deviceToken, message);
  };