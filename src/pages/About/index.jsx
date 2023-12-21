import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_1.svg";
import StoryImage from "../../assets/images/about1.svg";
import VisionImage from "../../assets/images/about2.svg";
import MissionImage from "../../assets/images/about3.svg";
import "./index.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        At AQFITNESS, we're dedicated to fostering a community of wellness and
        strength. Through personalized training and a supportive environment, we
        empower individuals to achieve their fitness goals and thrive.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              At AQFITNESS, our story is one of dedication and passion for
              fitness. Founded on the belief that everyone can achieve their
              best self, we provide a supportive community, expert trainers, and
              personalized programs, guiding individuals on a transformative
              journey toward strength and well-being. Join us in creating a
              healthier, stronger, and more vibrant community where every
              achievement is celebrated, and every goal is surpassed. This is
              more than a gym; it's a place where stories of resilience,
              determination, and success unfold every day.
            </p>
            <p>
              Continuing our journey, we take pride in fostering a culture of
              continuous improvement. With state-of-the-art equipment and
              dynamic classes, we empower members to surpass their limits. Your
              success story is our inspiration, and together, we redefine what's
              possible in the world of fitness.
            </p>
            <p>
              We're not just a gym; we're a community dedicated to your total
              well-being. Beyond workouts, we offer nutrition support, mental
              wellness programs, and a strong support system. Join us in
              achieving a balanced and fulfilling life.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              We lead people to a healthier life no matter who you are or where
              you live. At AQFITNESS, we want to contribute to better health on
              our members terms. We want everyone to have the possibility to
              work out anytime they want, as close to their home or place of
              work as possible - at an attractive price.
            </p>
            <p>
              The tempo is high, but primarily it's a social, progressive and
              driven environment. We aim to always improve on what we consider
              to be the best workout concept, and together we set ambitious
              goals that we work hard to achieve.
            </p>
            <p>
              Our values define how we work within our company and can be
              considered AQFITNESS's core. When we interact with our
              colleagues or members our values help us grow. Our shared approach
              allows us to attract new colleagues around the world.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide the best value option in the fitness
              industry in Europe, Asia, Central- and South America. We will do
              this through availability, hospitality, and functionality at an
              attractive price.
            </p>
            <p>
              At AQFITNESS, we are proud to provide our members with access to
              exercise opportunities in five countries, on three continents.
              Accessibility to us means not only that we have gyms in several
              countries and are open 24 hours a day, but also that everything is
              included in our membership. This means that our member can work
              out at any of our gyms without extra costs and with no limitations
              on our group classes.
            </p>
            <p>
              Hospitality is all about being friendly and welcoming to all our
              members, and we do this by putting all our focus on the members.
              We want our members to feel seen, heard and appreciated by all our
              coworkers. As a team we create the best workout environment, and
              we always aim for our members to leave with a positive impression
              of our gyms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
