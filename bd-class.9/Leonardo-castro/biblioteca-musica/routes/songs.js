import express from 'express';
import Song from '../models/Song.js';
import Artist from '../models/Artist.js';

const router = express.Router();

// Obtener todas las canciones con sus respectivos artistas
router.get('/with-artists', async (req, res) => {
  try {
    const songs = await Song.findAll({ include: Artist });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las canciones de un artista específico
router.get('/artist/:artistId', async (req, res) => {
  try {
    const songs = await Song.findAll({ where: { artistId: req.params.artistId } });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
