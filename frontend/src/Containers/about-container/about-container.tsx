import About from "../../components/about/about.tsx"
import TitleAbout from "../../components/title-about/title-about.tsx"
import "./about-container.css"

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";

const particlesInit = (engine) => {
    loadFull(engine);
  };

const AboutContainer = () => {

    return (
        <>
            <TitleAbout />
            <About />
        <Particles init={particlesInit} options={particlesOptions} />
            
        </>
    )
}

export default AboutContainer
