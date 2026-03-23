import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  slug: string;
  summary: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  category: ('tech' | 'marketing' | 'hybrid')[];
  tags: string[];
  techStack: string[];
  tools: string[];
  problem?: string;
  solution?: string;
  myRole?: string;
  results?: {
    metric: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: boolean;
  featured: boolean;
  order: number;
  startDate?: Date;
  endDate?: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: { type: String, required: true },
    description: String,
    thumbnail: String,
    images: [{ type: String }],
    category: [{
      type: String,
      enum: ['tech', 'marketing', 'hybrid']
    }],
    tags: [{ type: String }],
    techStack: [{ type: String }],
    tools: [{ type: String }],
    problem: String,
    solution: String,
    myRole: String,
    results: [{
      metric: String,
      value: String
    }],
    liveUrl: String,
    githubUrl: String,
    caseStudy: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    startDate: Date,
    endDate: Date
  },
  { timestamps: true }
);

export default mongoose.model<IProject>('Project', ProjectSchema);
