import "./footer.css";

const Footer = () => {
    return (
        <>
        <footer>
        <ul className="social-icons">
            {/* instagram */}
            <li>
            <a href="#" className="social-icon facebook">
                <i className="fab fa-instagram icon"></i>
            </a>
            </li>
            <li>
            <a href="#" className="social-icon twitter">
                <span className="material-symbols-outlined">
                mail
                </span>
            </a>
            </li>
            <li>
            <a href="#" className="social-icon linkedin">
                <i className="fab fa-linkedin-in icon"></i>
            </a>
            </li>
        </ul>
        </footer>

        </>
    )
}

export default Footer