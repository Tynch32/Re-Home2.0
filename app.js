const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

/* Configuraciones */
app.use(express.static(path.join(__dirname,'public')));

/* Rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));


/* PARTIALS */
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "partials", "register.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "partials","login.html")));
app.get("/footer", (req, res) =>  res.sendFile(path.join(__dirname, "views","partials","footer.html")));


app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));