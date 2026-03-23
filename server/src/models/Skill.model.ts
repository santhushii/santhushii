import mongoose, { Document, Schema } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  category: 'programming' | 'tools' | 'marketing' | 'design' | 'other';
  level: number; // 0-100
  icon?: string;
  color?: string;
  order: number;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ['programming', 'tools', 'marketing', 'design', 'other'],
      required: true
    },
    level: { type: Number, min: 0, max: 100, default: 50 },
    icon: String,
    color: String,
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model<ISkill>('Skill', SkillSchema);
