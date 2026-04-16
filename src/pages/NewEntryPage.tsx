import { useNavigate } from 'react-router-dom';
import NewEntryForm from '../components/NewEntryForm';
import type { Mood } from '../data/entries';

interface NewEntryPageProps {
  onAddEntry: (title: string, summary: string, mood: Mood, tags: string[]) => void;
}

export default function NewEntryPage({ onAddEntry }: NewEntryPageProps) {
  const navigate = useNavigate();

  const handleFormSubmit = (title: string, summary: string, mood: Mood, tags: string[]) => {
    onAddEntry(title, summary, mood, tags);
    navigate('/entries');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h1 style={{ textAlign: 'center' }}>New Journal Entry</h1>
      {/* FORM USES 'onSubmit' */}
      <NewEntryForm onSubmit={handleFormSubmit} submitLabel="Create Entry" />
    </div>
  );
}