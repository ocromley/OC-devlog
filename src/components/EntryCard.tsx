import type { Entry } from '../data/entries'; // Fixed: Missing import

interface EntryCardProps {
  entry: Entry;
  onDelete: (id: number) => void;
}

export default function EntryCard({ entry, onDelete }: EntryCardProps) {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      marginBottom: '20px',
      border: '1px solid #e2e8f0',
      position: 'relative'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{entry.title}</h3>
      <p style={{ color: '#64748b', lineHeight: '1.6' }}>{entry.summary}</p>

      <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#94a3b8' }}>
        {entry.date}
      </div>

      <button 
        onClick={() => onDelete(entry.id)}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: '#fee2e2',
          color: '#ef4444',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Delete
      </button>
    </div>
  );
}