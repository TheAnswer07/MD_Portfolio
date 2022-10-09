import {FaGithub, FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div>
            <a href="#" className="social-links" target="_blank" noreferrer="true">
                <FaGithub/>
            </a>
            <a href="#" className="social-links" target="_blank" noreferrer="true">
            <FaLinkedin/>
            </a>
        </div>

    </footer>

    </>
  )
}
export default Footer