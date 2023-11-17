const jwt = require('jsonwebtoken');
const secretKey = '1234'; 

module.exports = (req, res, next) => {
  // se obtiene el token de la cabecera de autorización
  const token = req.header('Authorization');

  // Verifica si hay un token
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    // Verifica el token usando la clave secreta
    const decoded = jwt.verify(token, secretKey);

    // Agrega el objeto decodificado al objeto de solicitud para su uso posterior
    req.user = decoded;

    // Continúa con la ejecución del siguiente middleware o controlador
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};