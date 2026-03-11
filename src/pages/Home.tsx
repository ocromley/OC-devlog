import { Link } from 'react-router-dom';
import profilePic from '../assets/shared_image.jpg'; 

export default function Home() {
  return (
    <div style={{ 
      padding: '80px 20px', 
      maxWidth: '1000px', 
      margin: '0 auto', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      gap: '40px',
      flexWrap: 'wrap' 
    }}>
      {/* 1. THE SPACE ORBIT ANIMATIONS */}
      <style>
        {`
          @keyframes orbitRotate {
            0% { transform: rotate(0deg) scaleX(1.1) scaleY(0.9); }
            50% { transform: rotate(180deg) scaleX(0.9) scaleY(1.1); }
            100% { transform: rotate(360deg) scaleX(1.1) scaleY(0.9); }
          }
        `}
      </style>

      {/* 2. LEFT SIDE: OKSANA CROMLEY BRANDING */}
      <div style={{ flex: '1.2', minWidth: '350px' }}>
        <h1 style={{ fontSize: '2.8rem', margin: 0, color: '#0f172a' }}>
          Oksana <span style={{ color: '#060606' }}>Cromley</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: '500' }}>
          Database Architect | Technical Project Manager
        </p>
        <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.6' }}>
          Bridging the gap between complex data systems and strategic leadership. 
          Specializing in SQL optimization and Agile methodologies.
        </p>

        <div style={{ marginTop: '30px' }}>
          <Link to="/about" style={{
            backgroundColor: '#00a0dc',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-block',
            boxShadow: '0 4px 6px rgba(0, 160, 220, 0.2)'
          }}>
            View My Background
          </Link>
        </div>
      </div>

      {/* 3. RIGHT SIDE: THE BOLD MOVING OVAL EFFECT */}
      <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* THE MOVING OVAL (6px THICK LINE) */}
        <div style={{
          position: 'absolute',
          width: '270px',
          height: '270px',
          borderRadius: '50%',
          border: '6px solid #00a0dc', 
          animation: 'orbitRotate 6s linear infinite',
          opacity: 0.3,
          zIndex: 1
        }}></div>

        {/* THE STATIC RING AROUND THE PHOTO */}
        <div style={{
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          border: '5px solid #00a0dc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          zIndex: 3,
          boxShadow: '0 0 20px rgba(0, 160, 220, 0.2)',
          position: 'relative'
        }}>
          <img 
            src={profilePic} 
            alt="Oksana Cromley" 
            style={{ 
              width: '220px', 
              height: '220px', 
              borderRadius: '50%', 
              objectFit: 'cover' 
            }} 
          />
        </div>
      </div>
    </div>
  );
}