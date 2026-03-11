import { useState } from 'react';
import EntryCard from '../components/EntryCard';
import type { Entry } from '../data/entries';

interface LogsProps {
  entries: Entry[];
  onDelete: (id: number) => void;
}

export default function Logs({ entries, onDelete }: LogsProps) {
  const [filter, setFilter] = useState('All');
  
  // Calculate unique categories for the filter buttons
  const categories = ['All', ...Array.from(new Set(entries.map(e => e.category)))];

  const filteredEntries = filter === 'All' 
    ? entries 
    : entries.filter(e => e.category === filter);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Journal Logs</h1>
      
      {/* Category Filter Buttons */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #00a8e8',
              backgroundColor: filter === cat ? '#00a8e8' : 'white',
              color: filter === cat ? 'white' : '#00a8e8',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Entry List */}
      <div>
        {filteredEntries.map((item: Entry) => (
          <EntryCard 
            key={item.id} 
            entry={item} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
}