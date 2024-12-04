import overviewData from "../data/overviewData";
import Book from "../assets/book.png";

const Overview = () => {
  return (
    <section className="block block--dark overview">
      <div className="grid--1x2 container overview__container">
        <div className="overview__content">
          <span className="overview__heading">Short Story</span>
          <h2>Overview</h2>
          {overviewData.map((data, index) => (
            <div
              key={index}
              className="flex justify--between align--center gap overview__details"
            >
              <span className="overview__category">{data.category}</span>
              <span className="overview__output">{data.output}</span>
            </div>
          ))}
        </div>
        <div className="overview__image">
          <img className="img" src={Book} alt="" />
          <div className="image__gradient"></div>
          <div className="image__shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
