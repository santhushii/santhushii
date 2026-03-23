import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiCalendar } from 'react-icons/hi';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { getBlogPost } from '../utils/api';

interface BlogPostData {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: 'tech' | 'marketing' | 'career' | 'personal';
  publishedAt?: string;
  readTime?: number;
  tags: string[];
  author?: string;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getBlogPost(slug)
        .then(res => {
          setPost(res.data);
          setLoading(false);
        })
        .catch(() => {
          setPost(null);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <Button to="/blog" variant="primary">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/blog" className="inline-flex items-center text-purple-400 mb-8 hover:text-purple-300">
            <HiArrowLeft className="mr-2" /> Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              <span className="px-3 py-1 rounded-full glass border-white/20">
                {post.category}
              </span>
              {post.readTime && <span>{post.readTime} min read</span>}
              {post.publishedAt && (
                <span className="flex items-center">
                  <HiCalendar className="mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{post.title}</h1>
            <p className="text-xl text-gray-300">{post.excerpt}</p>
          </div>

          {post.coverImage && (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={post.coverImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
          )}

          <Card hover={false} className="prose prose-invert max-w-none">
            <div
              className="text-gray-300 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Card>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full glass border-white/20 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-white/10">
            <Button to="/blog" variant="secondary">
              Back to Blog
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default BlogPostPage;
