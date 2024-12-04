import { showcaseData } from "../data/showcaseData";

const ShowcasePage = () => {
  return (
    <section className="block block--dark">
      <div className="container">
        {showcaseData.map((data) => (
          <img className="img" src={data} alt="" />
        ))}
      </div>
    </section>
  );
};

export default ShowcasePage;
