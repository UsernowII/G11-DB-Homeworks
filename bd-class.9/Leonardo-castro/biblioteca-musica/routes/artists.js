import express from 'express';
import Artist from '../models/Artist.js';
import Song from '../models/Song.js';

const router = express.Router();

// Obtener todas las canciones de un artista
router.get('/:id/songs', async (req, res) => {
  try {
    const songs = await Song.findAll({ where: { artistId: req.params.id } });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener artistas por duración de canción
router.get('/by-song-duration/:duration', async (req, res) => {
  try {
    const artists = await Artist.findAll({
      include: {
        model: Song,
        where: {
          duration: {
            [Op.gte]: req.params.duration,
          },
        },
      },
    });
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
