import Card from "../../UI/Card/Index";
import image from "../../assets/images/values.svg"
import { values } from "../../data";
import SectionHead from "../SectionHead"
import { IoDiamond } from "react-icons/io5";

values

const Values = () => {
	return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={image} alt="Values image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<IoDiamond />} title={"Values"} />
          <p>
            Grit, community, and wellness converge at our gym, where we empower
            individuals to surpass fitness goals, forge lasting connections, and
            prioritize holistic well-being on their transformative fitness
            journey.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc  }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Values