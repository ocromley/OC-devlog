import { useState, type FormEvent } from 'react';
import type { Mood } from '../data/entries';

interface NewEntryFormProps {
  initial?: { title: string; summary: string; mood: Mood; tags: string[] };
  onSubmit: (title: string, summary: string, mood: Mood, tags: string[]) => void;
  submitLabel?: string;
}

export default function NewEntryForm({ initial, onSubmit, submitLabel = 'Save Entry' }: NewEntryFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [summary, setSummary] = useState(initial?.summary ?? '');
  const [mood, setMood] = useState<Mood>(initial?.mood ?? 'neutral');
  const [tagsInput, setTagsInput] = useState(initial?.tags.join(', ') ?? '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t !== '');
    onSubmit(title, summary, mood, tags);
    
    if (!initial) { // Only reset if we are making a NEW entry
      setTitle('');
      setSummary('');
      setMood('neutral');
      setTagsInput('');
    }
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <input style={inputStyle} value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea style={{ ...inputStyle, minHeight: '100px' }} value={summary} onChange={e => setSummary(e.target.value)} placeholder="Summary" required />
      
      <select style={inputStyle} value={mood} onChange={e => setMood(e.target.value as Mood)}>
        <option value="neutral">Neutral 😐</option>
        <option value="happy">Happy 😊</option>
        <option value="curious">Curious 🤔</option>
        <option value="frustrated">Frustrated 😤</option>
      </select>

      <input style={inputStyle} value={tagsInput} onChange={e => setTagsInput(e.target.value)} placeholder="Tags (comma separated)" />

      <button type="submit" style={{ backgroundColor: '#FF7F00', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
        {submitLabel}
      </button>
    </form>
  );
}