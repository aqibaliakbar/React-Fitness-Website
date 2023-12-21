import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="footer logo" />
          </Link>
          <p>
            Unleash your potential with cutting-edge workouts and personalized
            training at Elevate Fitness. Elevate your strength, Elevate your
            life.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <FaSquareXTwitter />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Our Programs</h4>
          <Link to="/about">About Us</Link>
          <Link to="/membership">Membership Info</Link>
          <Link to="/fitness-plans">Workout Programs</Link>
          <Link to="/class-schedule">Class Schedule</Link>
          <Link to="/contact">Get in Touch</Link>
        </article>
        <article>
          <h4>Connect Us</h4>
          <Link to="/about">About</Link>
          <Link to="/membership">Join Us</Link>
          <Link to="/find-trainers">Meet Our Trainers</Link>
          <Link to="/gallery">Photo Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </article>
			</div>
			<div className="footer__copyright">
				<small>2024 AQ-Developers &copy; All Rights Reserved</small>
			</div>
    </footer>
  );
};
export default Footer;
