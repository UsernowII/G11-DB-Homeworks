import { Router } from 'express';

import artistRoutes from './artist.routes.js';
import songRoutes from './song.routes.js';


const router = Router();

router.use(artistRoutes);
router.use(songRoutes);


export default router;
