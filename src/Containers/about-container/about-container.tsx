// Importaciones...

import About from "../../components/about/about.js";
import TitleAbout from "../../components/title-about/title-about.js";
import "./about-container.css";




const AboutContainer = () => {
  return (
    <div className="background">
      <TitleAbout />
      <About />
    </div>
  );
};

export default AboutContainer;
