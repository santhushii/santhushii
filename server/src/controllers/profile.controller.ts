import { Request, Response } from 'express';
import UserProfile from '../models/UserProfile.model';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await UserProfile.findOne().sort({ updatedAt: -1 });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};

export const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const profile = await UserProfile.findOneAndUpdate(
      {},
      { ...req.body, updatedAt: new Date() },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
