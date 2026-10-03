import "./Final.css";

function Final() {
  return (
    <section className="final">
      <div className="final__content">
        <p className="final__subtitle">
          До встречи
        </p>

        <h2 className="final__title">
          Ангелина
          <span>&</span>
          Евгений
        </h2>

        <p className="final__date">
          24.10.2026
        </p>

        <p className="final__text">
          Будем счастливы разделить
          <br />
          этот день вместе с вами.
        </p>
      </div>

      <div className="final__footer">
        <div className="final__line"></div>

        <div className="final__credit">
          <span>сделано с любовью ♥</span>

          <span>wedweb_anastasiya</span>

          <a
            href="https://www.instagram.com/wedweb_anastasiya/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram wedweb_anastasiya"
            className="final__instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Final;
