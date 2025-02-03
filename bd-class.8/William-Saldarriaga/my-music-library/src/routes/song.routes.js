import { Router } from 'express';
import { SongController } from "../controllers/song.controller.js";

const controller = new SongController();
const router = Router();

router.get('/songs', controller.getSongs);
router.get('/songs/:id', controller.findById);
router.post('/songs', controller.createSong);
router.put('/songs/:id', controller.updateSong);
router.delete('/songs/:id', controller.deleteSong);

export default router;