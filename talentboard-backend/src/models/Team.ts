import mongoose, { Schema, Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  createdBy: mongoose.Types.ObjectId; // এটি একটি user এর ID
}

const teamSchema = new Schema<ITeam>({
  name: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', // reference to User model
    required: true,
  },
});

export const Team = mongoose.model<ITeam>('Team', teamSchema);
