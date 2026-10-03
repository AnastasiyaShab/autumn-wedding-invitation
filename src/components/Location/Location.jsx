import "./Location.css";

function Location() {
  return (
    <section className="location">
      <div className="location__content">
        <p className="location__subtitle">The place</p>

        <h2 className="location__title">
          Место встречи
        </h2>

        <p className="location__text">
          Здесь мы будем праздновать
          <br />
          начало нашей семейной истории.
        </p>

        <div className="location__address">
          <h3>Парк-отель «Версаль»</h3>

          <p>
            Республика Беларусь, Минская область,
            <br />
            Пуховичский район, д. Сергеевичи,
            <br />
            комплекс «Версаль»
            <br />
            56 км от МКАД
          </p>
        </div>

        <a
          className="location__button"
          href="https://www.google.com/maps/place/%D0%9F%D0%B0%D1%80%D0%BA-%D0%BE%D1%82%D0%B5%D0%BB%D1%8C+%22%D0%92%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%22/@53.4995952,27.7476125,17z"
          target="_blank"
          rel="noreferrer"
        >
          Открыть на карте
        </a>
      </div>

      <div className="location__image">
        <img
          src="/images/location.jpg"
          alt='Парк-отель «Версаль»'
        />
      </div>
    </section>
  );
}

export default Location;