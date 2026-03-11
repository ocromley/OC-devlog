export interface Entry {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
}

const seedEntries: Entry[] = [
  {
    id: 1,
    title: "Project Initialized",
    date: "2026-03-01",
    category: "Development",
    summary: "Successfully set up the React environment with Vite and TypeScript."
  }
  // ... your other entries
];

export default seedEntries; // Renamed from 'entries'