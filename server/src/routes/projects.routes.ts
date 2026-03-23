import express from 'express';
import Project from '../models/Project.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    const query: any = {};
    
    if (category) {
      query.category = category;
    }
    if (featured === 'true') {
      query.featured = true;
    }
    
    const projects = await Project.find(query).sort({ order: -1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
});

export default router;
