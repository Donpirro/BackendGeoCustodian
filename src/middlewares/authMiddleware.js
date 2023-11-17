const jwt = require('jsonwebtoken');
const secretKey = '1234';

module.exports = (req, res, next) => {
  // Se obtiene el token de la cabecera de autorización
  const authorizationHeader = req.header('Authorization');

  // Verifica si hay un token
  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  // Verifica el formato de la cabecera de autorización
  const [bearer, token] = authorizationHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Formato de token inválido en la cabecera de autorización.' });
  }

  try {
    // Verifica el token usando la clave secreta
    const decoded = jwt.verify(token, secretKey, { ignoreExpiration: false });

    // Agrega el objeto decodificado al objeto de solicitud para su uso posterior
    req.user = decoded;

    // Continúa con la ejecución del siguiente middleware o controlador
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado.' });
    }
    return res.status(401).json({ message: 'Token inválido.' });
  }
};
