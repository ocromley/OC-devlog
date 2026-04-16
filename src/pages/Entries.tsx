export type Mood = 'happy' | 'curious' | 'frustrated' | 'neutral';

export interface Entry {
  id: number;
  title: string;
  summary: string; // Ensure this is here
  mood: Mood;
  tags: string[];
  createdAt: string; // Changed from 'date' to match your objects
  category: string; 
}

const seedEntries: Entry[] = [
  {
    id: 1,
    title: "Orange Coeur UI/UX Design System Implementation",
    createdAt: "2026-03-05T10:00:00Z",
    summary: "Established the primary visual identity for the Orange Coeur interface. Defined the 'Heart Orange' color palette ($#FF7F00$) and implemented a responsive grid system.",
    category: "Design",
    mood: "happy",
    tags: ["ui", "design"]
  },
  {
    id: 2,
    title: "Core Navigation and State Management Setup",
    createdAt: "2026-03-07T14:30:00Z",
    summary: "Integrated React Router v6 to handle deep-linking within the application. Configured the initial context providers for user sessions.",
    category: "Architecture",
    mood: "neutral",
    tags: ["react-router", "state"]
  }
];

export default seedEntries;