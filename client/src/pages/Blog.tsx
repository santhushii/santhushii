import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiCalendar } from 'react-icons/hi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { getBlogPosts } from '../utils/api';

interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  category: 'tech' | 'marketing' | 'career' | 'personal';
  publishedAt?: string;
  readTime?: number;
  tags: string[];
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const categories = ['all', 'tech', 'marketing', 'career', 'personal'];
  const categoryLabels: Record<string, string> = {
    all: 'All Posts',
    tech: 'Tech',
    marketing: 'Marketing',
    career: 'Career',
    personal: 'Personal'
  };

  useEffect(() => {
    setLoading(true);
    getBlogPosts(selectedCategory === 'all' ? undefined : selectedCategory)
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        // In a real app, you'd show placeholder content
        setPosts([]);
        setLoading(false);
      });
  }, [selectedCategory]);

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      <Section
        title="Blog & Insights"
        subtitle="Thoughts on tech, marketing, career, and more"
      >
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-semibold transition-all duration-300 pixel-text cursor-pointer ${
                selectedCategory === category
                  ? 'bg-neon-cyan text-black border-2 border-neon-cyan'
                  : 'glass border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10'
              }`}
              style={{
                boxShadow: selectedCategory === category 
                  ? '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)'
                  : '0 0 10px rgba(0, 255, 255, 0.2)'
              }}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading posts...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug || post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="h-full">
                      <div className="h-full flex flex-col">
                        {post.coverImage && (
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <div className="flex items-center gap-4 mb-2 text-sm text-gray-400">
                          <span className="px-2 py-1 rounded-full glass border-white/20">
                            {post.category}
                          </span>
                          {post.readTime && (
                            <span>{post.readTime} min read</span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                        {post.publishedAt && (
                          <div className="flex items-center text-gray-500 text-xs mb-4">
                            <HiCalendar className="mr-2" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                        )}
                        <div className="flex items-center text-purple-400 text-sm font-semibold">
                          Read More <HiArrowRight className="ml-2" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <Card hover={false} className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No blog posts found yet.</p>
            <p className="text-gray-500 text-sm">Check back soon for new insights!</p>
          </Card>
        )}
      </Section>
    </div>
  );
};

export default Blog;
