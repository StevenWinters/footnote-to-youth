import RandomVideo from "../assets/random-video.mp4";

const Discover = () => {
  return (
    <section className="block discover">
      <div className="container--lg discover__container">
        <header className="discover__header">
          <h2>Discover</h2>
        </header>
        <div className="video__border">
          <video className="video" src={RandomVideo} controls></video>
        </div>
      </div>
    </section>
  );
};

export default Discover;
