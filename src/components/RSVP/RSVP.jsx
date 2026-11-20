import { useState } from "react";
import "./RSVP.css";

function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = {
      name,
      attendance,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzV2EM0wqe72CKTBxN0dY0xNAx8fpg3FUqe146yniztuzHNhKIX1VBGou6YSirSTUpo/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(response),
        }
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  };

  return (
    <section className="rsvp">
      <div className="rsvp__content">
        <p className="rsvp__subtitle"></p>

        <h2 className="rsvp__title">
          Будете с нами?
        </h2>

        <p className="rsvp__text">
          Пожалуйста, подтвердите своё присутствие
          <br />
          на нашем празднике.
        </p>

        {isSubmitted ? (
          <div className="rsvp__success">
            <h3>Спасибо, что ответили 🤎</h3>

            <p>
              Будем рады разделить
              <br />
              этот день вместе с вами.
            </p>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}

export default RSVP;