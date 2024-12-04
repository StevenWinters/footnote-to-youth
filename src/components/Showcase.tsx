import ShowcaseImage from "../assets/showcase.png";
import ShowcaseIcon from "../assets/showcase-icon.png";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <section className="block block--dark showcase">
      <div className="gap container--lg showcase__container">
        <div className="showcase__box">
          <img className="img" src={ShowcaseImage} alt="" />
        </div>
        <div className="flex flex--column justify--center align--center gap showcase__box showcase__view">
          <img className="img img--showcase" src={ShowcaseIcon} alt="" />
          <h3>Showcase</h3>
          <Link className="link" to="/showcase">
            <button className="btn btn--primary showcase__btn">View</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
