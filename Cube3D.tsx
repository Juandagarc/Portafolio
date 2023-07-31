import React, { useState } from 'react';

const containerStyles: React.CSSProperties = {
  color: 'white',
  width: '500px',
  height: '500px',
  perspective: '1000px',
  margin: '0 auto',
  marginTop: '20%',
};

const cubeStyles: React.CSSProperties = {
  position: 'relative',
  width: '500px',
  height: '500px',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s, width 0.5s, height 0.5s',
};

const faceStyles: React.CSSProperties = {
  width: '500px',
  height: '500px',
  background: 'rgb(39, 40, 40)',
  border: '2px solid black',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif',
  fontSize: '1em',
  transition: 'transform 500ms',
};

const Cube3D: React.FC = () => {
  const [rotated, setRotated] = useState(false);
  const [resized, setResized] = useState(false);

  const handleMouseOver = () => {
    setRotated(false);
    setResized(true);
  };

  const handleMouseOut = () => {
    setRotated(true);
    setResized(false);
  };

  return (
    <div style={containerStyles}>
      <div
        style={{
          ...cubeStyles,
          transform: rotated ? 'rotate3d(1, 1, 0, 45deg)' : 'none',
          width: resized ? '1000px' : '500px',
          height: resized ? '1000px' : '500px',
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div style={{ ...faceStyles, transform: 'translateZ(250px)' }}>Top</div>
        <div style={{ ...faceStyles, transform: 'translateZ(-250px) rotateY(180deg)' }}>Bottom</div>
        <div style={{ ...faceStyles, transform: 'translateX(-250px) rotateY(-90deg)' }}>Left</div>
        <div style={{ ...faceStyles, transform: 'translateX(250px) rotateY(90deg)' }}>Right</div>
        <div style={{ ...faceStyles, transform: 'translateZ(250px)' }}>
          <div
            style={{
              position: 'relative',
              margin: '5%',
              marginBottom: '1%',
              color: 'white',
              backgroundColor: '#292828',
              padding: '0.5%',
              borderRadius: '2em',
              boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
              alignItems: 'center',
            }}
          >
            <p>
              Hey there! I'm Juan David García, a passionate student of Computer and Systems Engineering at the
              Technological University of Pereira, right here in my beloved city, Pereira, Colombia. Technology has
              always fascinated me, and I love exploring all the amazing things I can do with it.
              <br />
              <br />
              In university, I've had the chance to dive into a comprehensive curriculum that has given me knowledge in
              various areas of engineering. But what really excites me is delving into the fascinating world of Artificial
              Intelligence! I've been focusing on becoming a Fullstack Developer with AI skills, and every day I feel more
              prepared to take on exciting challenges in the tech industry.
              <br />
              <br />
              But that's not all! I'm also into learning languages. I hold a C1 certification in English from the prestigious
              British Council and a B2 level certified by Colombo Americano. And guess what? I'm currently in the process of
              learning French, and I'm already at a B1 level thanks to the French Alliance here in Pereira.
            </p>
          </div>
        </div>
        <div style={{ ...faceStyles, transform: 'translateZ(-250px) rotateY(180deg)' }}>Back</div>
      </div>
    </div>
  );
};

export default Cube3D;
