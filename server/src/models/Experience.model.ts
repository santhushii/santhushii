import mongoose, { Document, Schema } from 'mongoose';

export interface IExperience extends Document {
  company: string;
  title: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  type: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'contract';
  achievements: string[];
  tags: ('tech' | 'leadership' | 'marketing' | 'analytics' | 'product')[];
  description: string;
  companyLogo?: string;
  order: number;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    company: { type: String, required: true },
    title: { type: String, required: true },
    location: String,
    startDate: { type: Date, required: true },
    endDate: Date,
    isCurrent: { type: Boolean, default: false },
    type: {
      type: String,
      enum: ['full-time', 'part-time', 'internship', 'freelance', 'contract'],
      required: true
    },
    achievements: [{ type: String }],
    tags: [{
      type: String,
      enum: ['tech', 'leadership', 'marketing', 'analytics', 'product']
    }],
    description: String,
    companyLogo: String,
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model<IExperience>('Experience', ExperienceSchema);
