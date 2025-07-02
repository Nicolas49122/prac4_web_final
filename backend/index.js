const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productosRoutes');
const sequelize = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);

sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(3000, () => {
            console.log('Servidor corriendo en http://localhost:3000');
        });
    })
    .catch(error => {
        console.error('Error al sincronizar la base de datos:', error);
    });
// Export the app for testing purposes
module.exports = app;