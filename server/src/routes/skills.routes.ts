import express from 'express';
import Skill from '../models/Skill.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1, category: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error creating skill', error });
  }
});

export default router;
