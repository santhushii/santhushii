import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  bullets: string[];
  icon?: string;
  color?: string;
  order: number;
}

const ServiceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    bullets: [{ type: String }],
    icon: String,
    color: String,
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model<IService>('Service', ServiceSchema);
