import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ 
      padding: '20px', 
      borderBottom: '1px solid #eee', 
      display: 'flex', 
      gap: '20px',
      backgroundColor: 'white' // Optional: keeps it clean against the #f9f9f9 main background
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#00a0dc', fontWeight: 'bold' }}>Home</Link>
      
      {/* This matches the route in your App.tsx */}
      <Link to="/entries/new" style={{ textDecoration: 'none', color: '#334155' }}>New Entry</Link>
      
      {/* Added the link to see your existing logs */}
      <Link to="/entries" style={{ textDecoration: 'none', color: '#334155' }}>Entries</Link>
      
      <Link to="/about" style={{ textDecoration: 'none', color: '#334155' }}>About</Link>
    </nav>
  );
}