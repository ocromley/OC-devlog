import { Link } from 'react-router-dom';
import profilePic from '../assets/shared_image.jpg'; 

export default function Home() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
      <style>
        {`
          @keyframes orbitRotate {
            0% { transform: rotate(0deg) scaleX(1.1) scaleY(0.9); }
            50% { transform: rotate(180deg) scaleX(0.9) scaleY(1.1); }
            100% { transform: rotate(360deg) scaleX(1.1) scaleY(0.9); }
          }
          .home-grid {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 100px;
            width: 100%;
            flex-wrap: wrap;
          }
        `}
      </style>

      <div className="home-grid">
        {/* TEXT CONTENT */}
        <div style={{ flex: '1', minWidth: '400px', maxWidth: '700px' }}>
          {/* THE FIX: Removed <br /> and added whiteSpace: 'nowrap' */}
          <h1 style={{ 
            fontSize: '3.8rem', 
            margin: 0, 
            color: '#0f172a', 
            lineHeight: '1.1',
            whiteSpace: 'nowrap' 
          }}>
            Oksana <span style={{ color: '#090a0b' }}>Cromley</span>
          </h1>
          
          <p style={{ fontSize: '1.8rem', color: '#64748b', fontWeight: '500', marginTop: '15px' }}>
            Database Architect | Technical Project Manager
          </p>
          <p style={{ fontSize: '1.3rem', color: '#334155', lineHeight: '1.8', marginTop: '25px' }}>
            Bridging the gap between complex data systems and strategic leadership. 
            Specializing in SQL optimization and Agile methodologies.
          </p>

          <div style={{ marginTop: '40px' }}>
            <Link to="/about" style={{
              backgroundColor: '#00a0dc',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: '600',
              display: 'inline-block',
              boxShadow: '0 10px 20px rgba(0, 160, 220, 0.2)'
            }}>
              View My Background
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div style={{ position: 'relative', width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            border: '8px solid #00a0dc', 
            animation: 'orbitRotate 10s linear infinite',
            opacity: 0.15
          }}></div>

          <div style={{
            width: '330px',
            height: '330px',
            borderRadius: '50%',
            border: '6px solid #00a0dc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            zIndex: 3,
            boxShadow: '0 0 40px rgba(0, 160, 220, 0.1)'
          }}>
            <img 
              src={profilePic} 
              alt="Oksana" 
              style={{ 
                width: '310px', 
                height: '310px', 
                borderRadius: '50%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}