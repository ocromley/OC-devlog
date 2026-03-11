

// 1. You MUST import the form component here
import NewEntryForm from '../components/NewEntryForm';

interface NewEntryPageProps {
  onAddEntry: (title: string, content: string) => void;
}

export default function NewEntryPage({ onAddEntry }: NewEntryPageProps) {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>
        New Entry
      </h2>
      
      {/* 2. This tag now correctly calls the inputs you built */}
      <NewEntryForm onAddEntry={onAddEntry} />
    </div>
  );
}