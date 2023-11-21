const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Establece la carpeta de vistas y el motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Ruta para renderizar la página HTML
app.get('/', (req, res) => {
  // Pasa la clave de la API al renderizar la vista
  res.render('index', { apiKey: 'AIzaSyC_tO9nbpH2jp0LOF3aWX29QOGVhoGcjeY' });
});

// Carpeta estática para los archivos públicos (como estilos CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor web en http://localhost:${port}`);
});
