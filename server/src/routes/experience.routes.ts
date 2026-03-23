import express from 'express';
import Experience from '../models/Experience.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: -1, startDate: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experience', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ message: 'Error creating experience', error });
  }
});

export default router;
