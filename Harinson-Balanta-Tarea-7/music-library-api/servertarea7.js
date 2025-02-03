require('dotenv').config();
const express = require('express');
const { sequelize, Artist, Song } = require('./models'); 

sequelize.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error de conexión:', err));

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('API de Biblioteca de Música funcionando correctamente');
});


app.post('/songs', async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/songs', async (req, res) => {
    try {
        const songs = await Song.findAll({ include: Artist });
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
