import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Logs from './pages/Logs';
import NewEntryPage from './pages/NewEntryPage';
import seedEntries from './data/entries';
import type { Entry } from './data/entries';

// 1. REMOVE 'export default' from this internal component
function AppContent() {
  const [entries, setEntries] = useState<Entry[]>(seedEntries);
  const navigate = useNavigate();

  const handleAddEntry = (title: string, content: string) => {
    const newEntry: Entry = {
      id: Date.now(),
      title,
      date: new Date().toISOString().slice(0, 10),
      category: 'Development',
      summary: content,
    };
    setEntries((prev) => [newEntry, ...prev]);
    navigate('/entries');
  };

  const handleDeleteEntry = (id: number) => {
    setEntries((prev) => prev.filter(entry => entry.id !== id));
  };

  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', backgroundColor: '#f9f9f9' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/entries" 
            element={<Logs entries={entries} onDelete={handleDeleteEntry} />} 
          />
          <Route 
            path="/entries/new" 
            element={<NewEntryPage onAddEntry={handleAddEntry} />} 
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// 2. This is the ONLY default export that should remain
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}