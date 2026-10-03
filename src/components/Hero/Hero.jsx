import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src="/images/hero1.jpg"
        alt="Ангелина и Евгений"
      />

      <div className="hero__content">
        <p className="hero__subtitle">Wedding invitation</p>

        <h1 className="hero__title">
          Ангелина
          <span>&</span>
          Евгений
        </h1>

        <p className="hero__date">24.10.2026</p>

        <p className="hero__text">
          Мы приглашаем вас разделить
          <br />
          с нами этот особенный день
        </p>
      </div>
    </section>
  );
}

export default Hero;