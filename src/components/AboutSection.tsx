export default function AboutSection() {
  return (
    <section style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '80px 20px',
      textAlign: 'center'
    }}>
      {/* THE MORPHING OVAL CONTAINER */}
      <div style={{ position: 'relative', width: '300px', height: '300px', marginBottom: '40px' }}>
        
        {/* The Animated Liquid Oval Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, #FF7F00, #ffb366)',
          animation: 'morph 8s ease-in-out infinite',
          zIndex: 1,
          filter: 'blur(10px)',
          opacity: 0.6
        }}></div>

        {/* The Actual Picture inside the Morphing Oval */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          animation: 'morph 8s ease-in-out infinite', // Same animation as background
          border: '4px solid white',
          zIndex: 2,
          boxShadow: '0 15px 35px rgba(255,127,0,0.3)'
        }}>
          <img 
            src="/profile.jpg" 
            alt="Orange Coeur" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transform: 'scale(1.1)' // Slightly zoomed for better fit in moving oval
            }}
          />
        </div>
      </div>

      {/* BRAND TEXT */}
      <div style={{ zIndex: 10 }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#FF7F00', margin: 0 }}>
          ORANGE COEUR
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px' }}>
          Digital Architecture & Precision Design
        </p>
      </div>

      {/* THE CSS MAGIC FOR THE OVAL EFFECT */}
      <style>{`
        @keyframes morph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
      `}</style>
    </section>
  );
}