import mongoose, { Document, Schema } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: 'tech' | 'marketing' | 'career' | 'personal';
  tags: string[];
  published: boolean;
  publishedAt?: Date;
  readTime?: number;
  author?: string;
  seoMeta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: String,
    category: {
      type: String,
      enum: ['tech', 'marketing', 'career', 'personal'],
      required: true
    },
    tags: [{ type: String }],
    published: { type: Boolean, default: false },
    publishedAt: Date,
    readTime: Number,
    author: String,
    seoMeta: {
      title: String,
      description: String,
      keywords: [{ type: String }]
    }
  },
  { timestamps: true }
);

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
