import { useEffect, useState } from "react";
import "./Countdown.css";

const weddingDate = new Date("2026-10-24T15:00:00");

function Countdown() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = weddingDate - new Date();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <p className="countdown__subtitle"></p>

      <h2 className="countdown__title">
        До нашего дня
      </h2>

      <div className="countdown__timer">
        <div className="countdown__item">
          <span>{timeLeft.days}</span>
          <p>дней</p>
        </div>

        <div className="countdown__item">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <p>часов</p>
        </div>

        <div className="countdown__item">
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <p>минут</p>
        </div>

        <div className="countdown__item">
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <p>секунд</p>
        </div>
      </div>

      <p className="countdown__date">
        24 октября 2026
      </p>
    </section>
  );
}

export default Countdown;