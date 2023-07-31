import React from 'react';
import RandomQuoteResolver from './RandomQuoteResolver';
import './title-about.css';

const TitleAbout: React.FC = () => {
  return (
    <div>
      {/* Otros componentes y contenido aquí */}
      <div className="title-about-container">
                <h1 className="const">const</h1>
                <RandomQuoteResolver />
            </div>
      
      {/* Más componentes y contenido aquí */}
    </div>
  );
};

export default TitleAbout;
