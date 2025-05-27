import { Response } from 'express';
import { Team } from '../models/Team';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export const createTeam = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { name, members } = req.body;
    if (!req.userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const team = await Team.create({
      name,
      members,
      createdBy: req.userId,
    });
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create team', error: (err as Error).message });
  }
};

export const getMyTeams = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const teams = await Team.find({ createdBy: req.userId }).populate('members', 'name email');

    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch teams', error: (err as Error).message });
  }
};
