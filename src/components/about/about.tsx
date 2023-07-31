import React, { useState } from 'react';
import FotoCara1 from "../../assets/fotocara1.jpeg";
import FotoCara2 from "../../assets/fotocara2.jpeg";
import "./about.css"

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className='Container-cube-principal'>
    <div className="container-cube">
      <div
        className={`cube ${isHovered ? 'cube-resized' : 'cube-rotated'}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="face top">Top</div>
        <div className="face bottom"><img className='ajustar-imagen' src={ FotoCara2 } alt="right" /></div>
        <div className="face left"><img className='ajustar-imagen'  src={ FotoCara1 } alt="left" /></div>
        <div className="face right">right</div>
        <div className="face front">
          <div className="content-1">
            <p className="text-1">
              <h1 className="general-title">GENERAL</h1>
              Hey there! I'm Juan David García, a passionate student of Computer and Systems Engineering at Technological University of Pereira, right here in my beloved city, Pereira, Colombia. Technology has always fascinated me, and I love exploring all the amazing things I can do with it.
              <br /><br />
              In university, I've had the chance to dive into a comprehensive curriculum that has given me knowledge in various areas of engineering. But what really excites me is delving into the fascinating world of Artificial Intelligence! I've been focusing on becoming a Fullstack Developer with AI skills, and every day I feel more prepared to take on exciting challenges in the tech industry.
              <br /><br />
              But that's not all! I'm also into learning languages. I hold a C1 certification in English from the prestigious British Council and a B2 level certified by Colombo Americano. And guess what? I'm currently in the process of learning French, and I'm already at a B1 level thanks to the French Alliance here in Pereira.
            </p>
          </div>
        </div>
        <div className="face back">Back</div>
      </div>
    </div>
    </div>
  );
};

export default About;