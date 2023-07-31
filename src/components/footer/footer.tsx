import "./footer.css";

const Footer = () => {
    return (
        <>
        <footer>
        <ul className="social-icons">
            {/* instagram */}
            <li>
            <a href="https://www.instagram.com/juanda_garc/" className="social-icon facebook">
                <i className="fab fa-instagram icon"></i>
            </a>
            </li>
            <li>
            {/* se crea uno para que enviar correo */}
            <a href="mailto:juan.garcia17@utp.edu.co?subject = Feedback&body = Message" className="social-icon twitter">
                <span className="material-symbols-outlined">
                mail
                </span>
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/juan-david-garcia-arce-50169a283/" className="social-icon linkedin">
                <i className="fab fa-linkedin-in icon"></i>
            </a>
            </li>
        </ul>
        </footer>

        </>
    )
}

export default Footer