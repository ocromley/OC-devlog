import type { Entry } from '../data/entries';

interface EntryCardProps {
  // Use the Entry type we defined in Step 13/14
  entry: Entry;
  onDelete: (id: number) => void;
}

export default function EntryCard({ entry, onDelete }: EntryCardProps) {
  // Mapping the text mood to an emoji
  const moodEmojis: Record<string, string> = {
    happy: '😊',
    neutral: '😐',
    curious: '🤔',
    frustrated: '😤',
  };

  const displayMood = moodEmojis[entry.mood] || '📝';

  return (
    <div className="entry-card" style={{
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '24px',
      border: '1px solid #e2e8f0',
      position: 'relative',
      marginBottom: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}>
      {/* DELETE BUTTON */}
      <button 
        onClick={() => {
          if (window.confirm("Delete this entry?")) {
            onDelete(entry.id);
          }
        }}
        style={{
          position: 'absolute',
          top: '25px',
          right: '25px',
          backgroundColor: '#fee2e2',
          color: '#ef4444',
          border: 'none',
          padding: '8px 14px',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fecaca')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fee2e2')}
      >
        Delete
      </button>

      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.6rem', color: '#0f172a', paddingRight: '80px' }}>
        {entry.title}
      </h3>
      
      <div style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '15px' }}>
        {/* 1. Use entry.createdAt (formatted) instead of entry.date */}
        {new Date(entry.createdAt).toLocaleDateString()} • <span style={{ fontSize: '1.2rem' }} title={entry.mood}>{displayMood}</span>
      </div>

      <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '20px' }}>
        {/* 2. Use entry.summary instead of entry.content */}
        {entry.summary}
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {entry.tags.map(tag => (
          <span key={tag} style={{ 
            fontSize: '0.85rem', 
            color: '#00a0dc', 
            backgroundColor: '#f0f9ff', 
            padding: '4px 12px', 
            borderRadius: '8px',
            fontWeight: '500'
          }}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}