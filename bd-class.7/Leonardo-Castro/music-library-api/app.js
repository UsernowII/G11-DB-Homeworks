const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const artistRoutes = require('./routes/artistRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();
app.use(bodyParser.json());

// Rutas
app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

// Sincronizar con la base de datos
const startServer = async () => {
    try {
        await sequelize.sync();
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
