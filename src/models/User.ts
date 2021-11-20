export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  is_developer?: boolean;
  avatar_url?: string;
  created_at: Date;
}