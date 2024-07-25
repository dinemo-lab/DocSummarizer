import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the email icon
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="mailto:dineshmourya02@gmail.com" className="contact-icon" aria-label="Contact via email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <p className="created-by">Created by Dinesh</p>
      </div>
    </footer>
  );
};

export default Footer;
