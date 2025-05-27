
export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'freelancer' | 'client';
  skills: string[];
  hourlyRate?: number;
  bio?: string;
  avatar?: string;
}
