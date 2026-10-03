import { useState } from "react";
import "./RSVP.css";

function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      name,
      attendance,
    });
  };

  return (
    <section className="rsvp">
      <div className="rsvp__content">
        <p className="rsvp__subtitle">RSVP</p>

        <h2 className="rsvp__title">
          Будете с нами?
        </h2>

        <p className="rsvp__text">
          Пожалуйста, подтвердите своё присутствие
          <br />
          на нашем празднике.
        </p>

        <form className="rsvp__form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Ваше имя
          </label>

          <input
            id="name"
            type="text"
            placeholder="Имя и фамилия"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="attendance">
            Вы сможете присутствовать?
          </label>

          <select
            id="attendance"
            value={attendance}
            onChange={(event) => setAttendance(event.target.value)}
            required
          >
            <option value="">
            Выберите вариант
            </option>

            <option value="yes">
            Да, буду с вами
            </option>

            <option value="no">
            К сожалению, не смогу
            </option>

            <option value="maybe">
            Пока что не могу дать ответ
            </option>
            
          </select>

          <button type="submit">
            Подтвердить
          </button>
        </form>
      </div>
    </section>
  );
}

export default RSVP;