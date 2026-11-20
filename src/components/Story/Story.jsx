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
          Это была любовь с первого взгляда. <br />
          Мы встретились в парке в один солнечный день — 
          <br />
          и с тех пор каждый наш день был солнечным. 
          <br />
          Теперь мы хотим связать свои судьбы браком и пронести эту 
          <br />
          любовь через всю жизнь.
        </p>
      </div>
    </section>
  );
}

export default Story;