const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// Endpoint para iniciar sesión
exports.login = async (req, res, connection) => {
  const { username, password } = req.body;

  try {
    // Consultar al usuario en la base de datos
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);

    // Verificar si el usuario existe
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
    }

    const user = rows[0];

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
    }

    // Generar un token de autenticación
    const token = jwt.sign(
      { userId: user.id, username: user.username, email: user.email, phone: user.phone },
      'tu_clave_secreta',
      {
        expiresIn: '1h', // Expira en 1 hora
      }
    );

    // Enviar el token como respuesta
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};