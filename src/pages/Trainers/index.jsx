import "./index.css";
import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_2.svg";
import { trainers } from "../../data.jsx";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Trainer from "../../components/Trainer/index.jsx";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Embark on a transformative fitness journey with AQFITNESS and meet our
        exceptional team of expert trainers. Our Trainers are more than
        instructors; they are dedicated mentors, guiding you towards your
        fitness goals with personalized expertise. 
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return (
                <Trainer
                  key={id}
                  image={image}
                  name={name}
                  job={job}
                  socials={[
                    { icon: <FaInstagram />, link: socials[0] },
                    { icon: <FaSquareXTwitter />, link: socials[1] },
                    { icon: <FaFacebookF />, link: socials[2] },
                    { icon: <FaLinkedin />, link: socials[3] },
                  ]}
                />
              );

             
            })
          }
        </div>
      </section>
    </>
  );
};

export default Trainers;
