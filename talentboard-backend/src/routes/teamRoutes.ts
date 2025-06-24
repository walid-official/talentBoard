import express from 'express';
import { createTeam, getMyTeams } from '../controllers/teamController';
import { requireAuth } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/create', requireAuth, createTeam);
router.get('/my-teams', requireAuth, getMyTeams);

export default router;