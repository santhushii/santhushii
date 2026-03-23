import mongoose, { Document, Schema } from 'mongoose';

export interface IContactMessage extends Document {
  name: string;
  email: string;
  message: string;
  projectType?: string;
  status: 'new' | 'read' | 'replied';
  repliedAt?: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    projectType: String,
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new'
    },
    repliedAt: Date
  },
  { timestamps: true }
);

export default mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);
