export interface Game {
  id: string;
  name: string;
  developer: string;
  cover_url?: string;
  released_at: Date;
  created_at: Date;
}