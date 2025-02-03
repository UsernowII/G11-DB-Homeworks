import { Router } from 'express';
import { ArtistController } from "../controllers/artist.controller.js";

const controller = new ArtistController();
const router = Router();

router.get('/artists', controller.getArtists);
router.get('/artists/:id', controller.findById);
router.post('/artists', controller.createArtist);
router.put('/artists/:id', controller.updateArtist);
router.delete('/artists/:id', controller.deleteArtist);

// Tarea 9 - Punto 2.1. Obtener todas las canciones de un artista (query utilizando la relación).
router.get('/artists/:id/songs', controller.getSongsByArtist);

// Tarea 9 - Punto 2.4. Obtener todos los artistas con canciones de duración específica o mayor (query utilizando la relación).
router.get('/artists-by-song-duration/:duration', controller.getArtistsBySongDuration);


export default router;