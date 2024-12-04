import { Link } from "react-router-dom";
import "../index.css";

function MenuPage() {
  return (
    <section className="menu">
      <div className="flex align--center menu__hero">
        <h1 className="menu__heading">
          Footnote
          <br /> to Youth
        </h1>
        <span className="header__description">
          a short story written by
          <br /> José Garcia Villa
        </span>
        <Link to="home">
          <div className="flex flex--column align--center menu__container">
            <span className="menu__start">start</span>
            <button className="btn btn--circle menu__btn"></button>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default MenuPage;
