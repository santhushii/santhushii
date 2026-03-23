import express from 'express';
import BlogPost from '../models/BlogPost.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category, published } = req.query;
    const query: any = {};
    
    if (category) {
      query.category = category;
    }
    if (published === 'true') {
      query.published = true;
    }
    
    const posts = await BlogPost.find(query)
      .sort({ publishedAt: -1, createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog posts', error });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug, published: true });
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog post', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const post = new BlogPost(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post', error });
  }
});

export default router;
