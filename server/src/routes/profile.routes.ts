import express from 'express';
import { getProfile, createOrUpdateProfile } from '../controllers/profile.controller';

const router = express.Router();

router.get('/', getProfile);
router.post('/', createOrUpdateProfile);
router.put('/', createOrUpdateProfile);

export default router;
