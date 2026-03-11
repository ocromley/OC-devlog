export interface Entry {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: string;
}

const entries: Entry[] = [
  {
    id: 1,
    title: "Orange Coeur UI/UX Design System Implementation",
    date: "2026-03-05",
    summary: "Established the primary visual identity for the Orange Coeur interface. Defined the 'Heart Orange' color palette ($#FF7F00$) and implemented a responsive grid system for cross-device compatibility.",
    category: "Design"
  },
  {
    id: 2,
    title: "Core Navigation and State Management Setup",
    date: "2026-03-07",
    summary: "Integrated React Router v6 to handle deep-linking within the application. Configured the initial context providers for user sessions and heart-tracking features.",
    category: "Architecture"
  },
  {
    id: 3,
    title: "User Profile & Dashboard Prototype",
    date: "2026-03-09",
    summary: "Developed the static dashboard layout for the Orange Coeur member area. Utilized reusable components for user statistics and activity logs to ensure a consistent user experience.",
    category: "Feature"
  }
];

export default entries;