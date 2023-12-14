import { Link } from "react-router-dom";
import headerImage from "../../assets/images/main_header.svg";


const MainHeader = () => {


  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#30DaysOfWellness</h4>
          <h1>Embrace a Healthier Lifestyle!</h1>
          <p>
            Discover the joy of staying active and leading a balanced life.
            Unleash your potential with our curated wellness programs.
          </p>
          <Link to="/plans" className="btn lg">
            Explore Plans
          </Link>
        </div>
        <div className="main__header-right">
          <div
            className="main__header-circle"
          
          ></div>
          <div className="main__header-image">
            <img src={headerImage} alt="header-image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
