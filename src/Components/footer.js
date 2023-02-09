import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <a
        className="footer-link"
        href="https://github.com/Coshido?tab=repositories"
        target="_blank"
      >
        Copyrights © 2022 Coshido <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
}

export default Footer;
