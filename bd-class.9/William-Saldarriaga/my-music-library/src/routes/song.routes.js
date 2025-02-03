import { Router } from 'express';
import { SongController } from "../controllers/song.controller.js";

const controller = new SongController();
const router = Router();

router.get('/songs', controller.getSongs);
router.get('/songs/:id', controller.findById);
router.post('/songs', controller.createSong);
router.put('/songs/:id', controller.updateSong);
router.delete('/songs/:id', controller.deleteSong);

// Tarea 9 - Punto 2.2. Obtener todas las canciones con sus respectivos artistas (query utilizando la relación).
router.get('/songs-with-artists', controller.getSongsWithArtists); 

// Tarea 9 - Punto 2.3. Obtener todas las canciones de un artista específico (query utilizando la relación).
router.get('/songs/artist/:artistId', controller.getSongsByArtistId); 


export default router;