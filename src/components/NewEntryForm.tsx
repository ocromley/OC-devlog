import { useState, type FormEvent } from 'react';

interface NewEntryFormProps {
  onAddEntry: (title: string, content: string) => void;
}

export default function NewEntryForm({ onAddEntry }: NewEntryFormProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(''); 
  const [summary, setSummary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Derived Values for validation
  const titleError = title.trim() === '' ? 'Title is required.' : '';
  const summaryError = summary.trim() === '' ? 'Summary is required.' : '';
  const dateError = date === '' ? 'Date is required.' : '';
  const isValid = titleError === '' && summaryError === '' && dateError === '';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid) return;

    onAddEntry(title.trim(), summary.trim());

    // Reset Form
    setTitle('');
    setDate('');
    setSummary('');
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', gap: '15px' }}>
      
      {/* 1. THE TITLE BOX */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: 'bold' }}>Title</label>
        <input 
          type="text" 
          placeholder="What happened today?" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
        />
        {submitted && titleError && <span style={{ color: 'red', fontSize: '12px' }}>{titleError}</span>}
      </div>

      {/* 2. THE DATE BOX */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: 'bold' }}>Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
        />
        {submitted && dateError && <span style={{ color: 'red', fontSize: '12px' }}>{dateError}</span>}
      </div>

      {/* 3. THE SUMMARY BOX (Where you write the main entry) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: 'bold' }}>Summary</label>
        <textarea 
          placeholder="Write your details here..." 
          value={summary} 
          onChange={(e) => setSummary(e.target.value)} 
          style={{ padding: '12px', minHeight: '150px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }}
        />
        {submitted && summaryError && <span style={{ color: 'red', fontSize: '12px' }}>{summaryError}</span>}
      </div>

      <button 
        type="submit" 
        style={{
          padding: '12px',
          backgroundColor: '#00a0dc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Save Entry
      </button>
    </form>
  );
}