import "./home.css"
import "./home.scss"
import Image1 from "../../assets/image-intro-home.png"

const HomeIntro = () => {
    return (
        <div className="name-title">

                <h1 className="title-h1">Hello</h1>
                <div className="content title-h1">
                <div className="content__container">                 
                    <ul className="content__container__list">
                    <li className="content__container__list__item">world !</li>
                    <li className="content__container__list__item">I'M Juan David !</li>
                    </ul>
                </div>
                </div>
                <p className="title-p">HERE YOU CAN FIND MORE ABOUT ME!</p>
                <img src={ Image1 } alt="" className="img-home1" />
        </div>
    )
}

export default HomeIntro