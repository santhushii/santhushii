import express from 'express';
import Testimonial from '../models/Testimonial.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { featured } = req.query;
    const query: any = featured === 'true' ? { featured: true } : {};
    const testimonials = await Testimonial.find(query).sort({ order: 1, createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching testimonials', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error creating testimonial', error });
  }
});

export default router;
