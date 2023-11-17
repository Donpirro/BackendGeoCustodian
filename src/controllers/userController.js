// Supongamos que tenemos un array para almacenar usuarios como base de datos temporal
let users = [
    { id: 1, username: 'usuario1', email: 'usuario1@example.com' },
    { id: 2, username: 'usuario2', email: 'usuario2@example.com' },
  ];
  
  // Obtener todos los usuarios
  exports.getUsers = (req, res) => {
    res.json(users);
  };
  
  // Obtener un usuario por ID
  exports.getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  };