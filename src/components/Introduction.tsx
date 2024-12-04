import Border from "../assets/border.png";

const Introduction = () => {
  return (
    <section className="block introduction">
      <div className="container">
        <header>
          <h1>
            Footnote
            <br />
            to Youth
          </h1>
        </header>
        <div className="flex flex--column justify--between align--center introduction__container">
          <img className="img img--border" src={Border} alt="border" />
          <p>
            There lived a young boy, who resides in a quiet village, striving to
            support his family and his future self...
          </p>
          <img
            className="img img--border border__reverse"
            src={Border}
            alt="border"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
