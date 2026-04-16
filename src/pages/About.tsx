import profilePic from '../assets/shared_image.jpg'; 

export default function About() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', color: '#0f172a' }}>
      {/* CSS Animations for the Oval Spec Effects */}
      <style>
        {`
          @keyframes specPulse {
            0%, 100% {
              box-shadow: 0 0 15px rgba(0, 160, 220, 0.4), 0 0 30px rgba(0, 160, 220, 0.2);
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 30px rgba(0, 160, 220, 0.8), 0 0 50px rgba(0, 160, 220, 0.4);
              transform: scale(1.03);
            }
          }
          @keyframes specRotate {
            0% { transform: rotate(0deg) scaleX(1); }
            50% { transform: rotate(180deg) scaleX(1.15); }
            100% { transform: rotate(360deg) scaleX(1); }
          }
        `}
      </style>

      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '2px solid #00a0dc', 
        paddingBottom: '20px', 
        marginBottom: '40px',
        gap: '20px' 
      }}>
        {/* Left side: Text */}
        <div>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Oksana Cromley</h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', marginTop: '10px' }}>
            Database Architect | Technical Project Manager
          </p>
        </div>

        {/* Right side: Simple Circular Photo */}
        <img 
          src={profilePic} 
          alt="Oksana Cromley" 
          style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            border: '3px solid #00a0dc',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }} 
        />
      </header>

      <section style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#334155' }}>
        <p>
          I specialize in transforming complex data requirements into scalable, high-performance database architectures. 
          With a background deeply rooted in SQL optimization and schema design, I bridge the gap between technical 
          execution and strategic project management.
        </p>
        <p style={{ marginTop: '20px' }}>
          My approach combines data-driven decision-making with agile methodologies to ensure that development 
          teams stay aligned with stakeholder goals while maintaining the highest standards of data integrity.
        </p>
      </section>

      <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div>
          <h3 style={{ color: '#00a0dc' }}>Core Expertise</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>• SQL Performance Tuning</li>
            <li>• Relational Schema Design</li>
            <li>• Data Governance & Security</li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: '#00a0dc' }}>Leadership</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>• Agile/Scrum Management</li>
            <li>• Technical Roadmapping</li>
            <li>• Cross-functional Alignment</li>
          </ul>
        </div>
      </div>

      <section style={{ 
        marginTop: '60px', 
        paddingTop: '30px', 
        borderTop: '1px solid #e2e8f0',
        textAlign: 'center' 
      }}>
        <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Let's Connect</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          <a href="mailto:ocromley@icstars.org" style={{ 
            color: '#00a0dc', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', border: '1px solid #00a0dc', borderRadius: '8px'
          }}>
            Email Me
          </a>

          <a href="/Oksana_Cromley_Resume.pdf" download style={{ 
            color: '#0f172a', backgroundColor: '#f1f5f9', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', border: '1px solid #e2e8f0', borderRadius: '8px'
          }}>
            Download Resume
          </a>

          <a href="https://www.linkedin.com/in/oksana-cromley/" target="_blank" rel="noopener noreferrer" style={{ 
            color: 'white', backgroundColor: '#00a0dc', textDecoration: 'none', fontWeight: '600', padding: '10px 20px', borderRadius: '8px'
          }}>
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}