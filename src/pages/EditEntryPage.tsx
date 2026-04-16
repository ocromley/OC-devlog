import { useParams, useNavigate } from 'react-router-dom';
import NewEntryForm from '../components/NewEntryForm';
import type { Entry, Mood } from '../data/entries';

interface EditEntryPageProps {
  entries: Entry[];
  onUpdate: (id: number, title: string, summary: string, mood: Mood, tags: string[]) => void;
}

export default function EditEntryPage({ entries, onUpdate }: EditEntryPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const entryToEdit = entries.find((e) => e.id === Number(id));

  if (!entryToEdit) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Entry not found!</div>;
  }

  const handleUpdate = (title: string, summary: string, mood: Mood, tags: string[]) => {
    onUpdate(Number(id), title, summary, mood, tags);
    navigate('/entries');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h1 style={{ textAlign: 'center' }}>Edit Entry</h1>
      <NewEntryForm 
        initial={entryToEdit} 
        onSubmit={handleUpdate} // This must match the name handleUpdate above
        submitLabel="Update Entry" 
      />
    </div>
  );
}