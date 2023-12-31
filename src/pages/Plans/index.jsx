import "./index.css";
import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_5.svg";
import { plans } from "../../data.jsx";
import Card from "../../UI/Card/Index";



const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Welcome to AQFITNESS, where your fitness journey is crafted with
        precision and passion. Explore our Membership Plans tailored to meet
        diverse needs – from personalized guidance to the ultimate
        convenience, designed for busy individuals.
  
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({ feature, available }, index) => {
                    return <p key={index} className={!available ? "disabled" : ""}>{feature}</p>
                  })
                }

                <button className="btn lg">
                  Choose Plan
                </button>
              </Card>
            })
          }
        </div>

      </section>
    </>
  );
};

export default Plans;
