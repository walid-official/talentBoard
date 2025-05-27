import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'freelancer' | 'client' | 'admin';
  skills: string[];
  hourlyRate?: number;
  portfolioLinks?: string[];
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['freelancer', 'client', 'admin'], required: true },
  skills: [String],
  hourlyRate: Number,
  portfolioLinks: [String],
});

export default mongoose.model<IUser>('User', UserSchema);