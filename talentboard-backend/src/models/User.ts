import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'freelancer' | 'client';
  skills: string[];
  hourlyRate?: number;
  bio?: string;
  avatar?: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['freelancer', 'client'], required: true },
    skills: [{ type: String }],
    hourlyRate: Number,
    bio: String,
    avatar: String,
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);