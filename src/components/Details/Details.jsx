import "./Details.css";

function Details() {
  return (
    <section className="details">
      <div className="details__header">
        <p className="details__subtitle">For our guests</p>

        <h2 className="details__title">
          Несколько деталей
        </h2>

        <p className="details__intro">
          Мы хотим, чтобы этот день был комфортным
          <br />
          и приятным для каждого из вас.
        </p>
      </div>

      <div className="details__list">
        <div className="details__item">
          {/* <span className="details__number">① </span> */}

          <h3>Дресс-код</h3>

          <p>
            Будем рады видеть вас
            <br />
            в элегантных образах
            <br />
            в тёплых осенних оттенках.
          </p>
        </div>

        <div className="details__item">
          {/* <span className="details__number">○</span> */}

          <h3>Подарки</h3>

          <p>
            Самое главное для нас —
            <br />
            ваше присутствие и хорошее
            <br />
            настроение в этот день.
          </p>
        </div>

        <div className="details__item">
          {/* <span className="details__number">❸</span> */}

          <h3>Подтверждение</h3>

          <p>
            Пожалуйста, подтвердите
            <br />
            своё присутствие до
            <br />
            указанной даты.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details;