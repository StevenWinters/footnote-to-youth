import Jose from "../assets/jose.png";

const Works = () => {
  return (
    <section className="flex works">
      <img className="img works__image" src={Jose} alt="" />
      <div className="works__container">
        <header className="works__header">
          <span className="works__author">Jose Garcia Villa</span>
          <h3>Other Notable Works</h3>
        </header>
        <div className="work__details">
          <span className="work__detail">The Anchored Angel</span>
          <span className="work__detail">Emperor's New Sonnet</span>
        </div>
      </div>
    </section>
  );
};

export default Works;
