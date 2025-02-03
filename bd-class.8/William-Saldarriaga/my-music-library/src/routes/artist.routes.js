import { Router } from 'express';
import { ArtistController } from "../controllers/artist.controller.js";

const controller = new ArtistController();
const router = Router();

router.get('/artists', controller.getArtists);
router.get('/artists/:id', controller.findById);
router.post('/artists', controller.createArtist);
router.put('/artists/:id', controller.updateArtist);
router.delete('/artists/:id', controller.deleteArtist);

export default router;