import React, { useState } from 'react';
import FotoCara1 from "../../assets/fotocara1.jpeg";
import FotoCara2 from "../../assets/fotocara2.jpeg";
import "./cube.css"

const Cube: React.FC = () => {
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
              <h1 className="general-title">See Extra<br />information...</h1>
          </div>
        </div>
        <div className="face back">Back</div>
      </div>
    </div>
    </div>
  );
};

export default Cube;