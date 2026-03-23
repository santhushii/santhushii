import mongoose, { Document, Schema } from 'mongoose';

export interface IUserProfile extends Document {
  name: string;
  roles: string[];
  location: string;
  tagline: string;
  bio: string;
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
  avatar?: string;
  stats: {
    yearsExperience: number;
    projectsCount: number;
    keyTools: string[];
  };
  values: string[];
  techSide: {
    title: string;
    description: string;
    highlights: string[];
  };
  marketingSide: {
    title: string;
    description: string;
    highlights: string[];
  };
  story: string;
  updatedAt: Date;
}

const UserProfileSchema = new Schema<IUserProfile>(
  {
    name: { type: String, required: true },
    roles: [{ type: String }],
    location: { type: String, required: true },
    tagline: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    linkedin: String,
    github: String,
    twitter: String,
    website: String,
    avatar: String,
    stats: {
      yearsExperience: { type: Number, default: 0 },
      projectsCount: { type: Number, default: 0 },
      keyTools: [{ type: String }]
    },
    values: [{ type: String }],
    techSide: {
      title: String,
      description: String,
      highlights: [{ type: String }]
    },
    marketingSide: {
      title: String,
      description: String,
      highlights: [{ type: String }]
    },
    story: String,
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model<IUserProfile>('UserProfile', UserProfileSchema);
