import express from 'express';
import sequelize from './database.js';
import Artist from './models/Artist.js';
import Song from './models/Song.js';
import artistRoutes from './routes/artists.js';
import songRoutes from './routes/songs.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

// Sincronizar la base de datos y arrancar el servidor
const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

startServer();
