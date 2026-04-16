export type Mood = 'happy' | 'curious' | 'frustrated' | 'neutral'

export interface Entry {
  id: number;
  title: string;
  summary: string;
  mood: Mood;      // Changed from string to Mood for better typing
  tags: string[];  // <--- Changed from string to string[]
  createdAt: string | Date;
}
/** Shape returned by the API (tags is a comma-separated string) */
export interface ApiEntry {
  id: number;
  title: string;
  summary: string;
  mood: string;  // <--- Add this
  tags: string;  // <--- Add this
  createdAt: string;
  updatedAt: string;
}
/** Convert an API entry (tags as string) to a UI entry (tags as array) */
export function toEntry(raw: ApiEntry): Entry {
  return {
    ...raw,
    mood: raw.mood as Mood,
    tags: raw.tags
      ? raw.tags.split(',').map((t) => t.trim()).filter((t) => t !== '')
      : [],
  }
}