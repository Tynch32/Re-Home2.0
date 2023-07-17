const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

/* Configuraciones */
app.use(express.static(path.join(__dirname,'public')));

/* Rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/*',(req,res) => res.sendFile(path.join(__dirname,'views','404.html')));
app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));