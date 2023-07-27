import HomeIntro from "../../components/home-intro/home";
import GitHubCard from "../../components/github-card/github-card";
import "./home-container.css"
// images
import typescript from "../../assets/typescript.png"
import javascript from "../../assets/javascript.png"


const Home = () => {
    return (
        <div className="area" >
            <HomeIntro />
            <GitHubCard />
            <ul className="circles">
                <li><img src={typescript} alt="" id="circular-image-1" /></li>
                <li><img src={javascript} alt="" id="circular-image-2" /></li>
                <li></li>
                <li><img src={typescript} alt="" id="circular-image-3" /></li>
                <li></li>
                <li><img src={javascript} alt="" id="circular-image-4" /></li>
                <li></li>
                <li><img src={typescript} alt="" id="circular-image-5" /></li>
                <li><img src={javascript} alt="" id="circular-image-6" /></li>
                <li><img src={javascript} alt="" id="circular-image-7" /></li>
            </ul>
      </div >
    )
}

export default Home