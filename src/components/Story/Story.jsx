import "./Story.css";

function Story() {
  return (
    <section className="story">
      <div className="story__photos">
        <img
          className="story__photo story__photo--first"
          src="/images/story2.jpg"
          alt="Ангелина и Евгений"
        />

        <img
          className="story__photo story__photo--second"
          src="/images/story1.jpg"
          alt="Ангелина и Евгений"
        />
      </div>

      <div className="story__content">
        <p className="story__subtitle">Our story</p>

        <h2 className="story__title">
          Наша история
        </h2>

        <p className="story__text">
          Здесь появится наша история —
          <br />
          история Ангелины и Евгения.
        </p>
      </div>
    </section>
  );
}

export default Story;