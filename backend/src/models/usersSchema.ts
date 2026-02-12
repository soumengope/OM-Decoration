import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role: 'admin' | 'member';
}

const userSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'member'], default: 'member' },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('users', userSchema);
