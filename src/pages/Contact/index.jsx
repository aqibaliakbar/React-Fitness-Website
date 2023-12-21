import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_3.svg";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import "./index.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Ready to kickstart your fitness journey? Contact AQFITNESS now! Our team
        is here to assist with any inquiries or help you get started on your
        path to a healthier, stronger you. Connect with us today and let the
        transformation begin!
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:aqibaliakbar@gmail.com"
              target="__blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/axs.30"
              target="__blank"
              rel="noreferrer noopener"
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="https://wa.me/+92315xxx49"
              target="__blank"
              rel="noreferrer noopener"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;


