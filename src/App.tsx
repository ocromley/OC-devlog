import { Routes, Route, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// API & Data Imports
import { toEntry, type Entry, type Mood } from './data/entries';
import { fetchEntries, createEntry, deleteEntry, updateEntry, fetchTags } from './api/entries.ts'; 

// Component Imports
import EntryCard from './components/EntryCard';
import TagFilter from './components/TagFilter';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import NewEntryPage from './pages/NewEntryPage';
import EditEntryPage from './pages/EditEntryPage';

export default function App() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  
  // 0. Connect to URL Search Parameters
  const [searchParams] = useSearchParams();
  const activeTag = searchParams.get('tag') || undefined;

  // 1. Fetch entries (re-runs when activeTag in URL changes)
  useEffect(() => {
    setLoading(true);
    fetchEntries(activeTag)
      .then((raw) => setEntries(raw.map(toEntry)))
      .catch((err) => console.error("Load failed:", err))
      .finally(() => setLoading(false));
  }, [activeTag]);

  // 2. Fetch unique tags list once for the dropdown
  useEffect(() => {
    fetchTags().then(setAvailableTags).catch(console.error);
  }, []);

  // 3. CRUD Handlers
  const handleAddEntry = async (title: string, summary: string, mood: Mood, tags: string[]) => {
    try {
      const raw = await createEntry({ title, summary, mood, tags: tags.join(',') });
      setEntries((prev) => [toEntry(raw), ...prev]);
    } catch (err) {
      alert("Save failed");
    }
  };

  const handleUpdateEntry = async (id: number, title: string, summary: string, mood: Mood, tags: string[]) => {
    try {
      await updateEntry(id, { title, summary, mood, tags: tags.join(',') });
      setEntries(prev => prev.map(e => e.id === id ? { ...e, title, summary, mood, tags } : e));
    } catch (err) {
      alert("Update failed");
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!window.confirm("Delete permanently?")) return;
    try {
      await deleteEntry(Number(id));
      setEntries(prev => prev.filter(e => e.id !== Number(id)));
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="page-wrapper">
      <nav className="main-nav" style={{ display: 'flex', gap: '15px', padding: '20px', borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
        <Link to="/new">New Entry</Link>
        <Link to="/entries">Journal logs</Link>
        <Link to="/about">About</Link>
      </nav>

      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/new" element={
            <NewEntryPage onAddEntry={handleAddEntry} />
          } />

          <Route 
            path="/entries/:id/edit" 
            element={<EditEntryPage entries={entries} onUpdate={handleUpdateEntry} />} 
          />

          <Route path="/entries" element={
            <div className="standard-section" style={{ padding: '20px' }}>
              <h1 className="page-title">
                {activeTag ? `Journal logs: ${activeTag}` : 'Journal logs'}
              </h1>
              
              {/* Filter Dropdown */}
              <TagFilter tags={availableTags} />

              {loading && <p>Loading...</p>}
              
              <div className="entries-list">
                {entries.map((entry) => (
                  <EntryCard 
                    key={entry.id} 
                    entry={entry} 
                    onDelete={handleDelete} 
                  />
                ))}
              </div>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}