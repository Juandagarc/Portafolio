
import About from '../../components/about/about.js';
import Cube from '../../components/cube/cube.js';
import TitleAbout from '../../components/title-about/title-about.js';
import Video from '../../assets/videoplayback.mp4';
import './about-container.css';

const AboutContainer = () => {
  return (
    <div className="background">
      <div className='content-about' >
      <TitleAbout />
      <About />
      <Cube />
      </div>
      <video className='video' src={Video} autoPlay loop muted>
        {/* Agrega la etiqueta <source> para manejar diferentes formatos de video */}
        <source src={Video} type="video/mp4" />
        {/* Agrega más elementos <source> para otros formatos de video como WebM o Ogg */}
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  );
};

export default AboutContainer;
