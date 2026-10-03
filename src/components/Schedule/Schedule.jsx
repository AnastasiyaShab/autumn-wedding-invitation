import "./Schedule.css";

function Schedule() {
  return (
    <section className="schedule">
      <div className="schedule__header">
        <p className="schedule__subtitle">Wedding day</p>

        <h2 className="schedule__title">
          Наш день
        </h2>
      </div>

      <div className="schedule__list">
        <div className="schedule__item">
          <span className="schedule__time">14:00</span>

          <div className="schedule__event">
            <h3>Сбор гостей</h3>
            <p>
              Встречаемся, знакомимся и
              <br />
              наслаждаемся началом праздника.
            </p>
          </div>
        </div>

        <div className="schedule__item">
          <span className="schedule__time">15:00</span>

          <div className="schedule__event">
            <h3>Церемония</h3>
            <p>
              Самый важный момент нашего дня —
              <br />
              мы станем мужем и женой.
            </p>
          </div>
        </div>

        <div className="schedule__item">
          <span className="schedule__time">16:00</span>

          <div className="schedule__event">
            <h3>Праздничный ужин</h3>
            <p>
              Ужин, тёплые слова, тосты
              <br />
              и время вместе.
            </p>
          </div>
        </div>

        <div className="schedule__item">
          <span className="schedule__time">19:00</span>

          <div className="schedule__event">
            <h3>Танцы и праздник</h3>
            <p>
              Музыка, танцы и всё то,
              <br />
              ради чего мы собрались.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;