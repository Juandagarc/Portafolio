import batman from "../../assets/batman.gif";
import "./about.css";

const About = () => {
    return (
        <div className="about-container">
            <p className="about-text">Hey there! I'm Juan David García, a passionate student of Computer and Systems Engineering at Technological University of Pereira, right here in my beloved city, Pereira, Colombia. Technology has always fascinated me, and I love exploring all the amazing things I can do with it.
                <br />
                In university, I've had the chance to dive into a comprehensive curriculum that has given me knowledge in various areas of engineering. But what really excites me is delving into the fascinating world of Artificial Intelligence! I've been focusing on becoming a Fullstack Developer with AI skills, and every day I feel more prepared to take on exciting challenges in the tech industry. But that's not all! I'm also into learning languages. I hold a C1 certification in English from the prestigious British Council and a B2 level certified by Colombo Americano. And guess what? I'm currently in the process of learning French, and I'm already at a B1 level thanks to the French Alliance here in Pereira.
                <br />
                <img className="batman-gif" src={ batman } alt="batman gif" />
                </p>
            <figure className="about-image">
                <embed className="about-embed" src="https://wakatime.com/share/@18efb7ff-a1b8-42bd-ade2-5bd5f8e15f4f/87910843-eb5e-4b3b-be05-f1fa2de7151f.svg"></embed>
            </figure>
        </div>
    )
}

export default About;
