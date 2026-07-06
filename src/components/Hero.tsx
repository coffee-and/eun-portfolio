const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <p className="eyebrow">portfolio / frontend</p>

      <h1>
        front-end. product ui developer_
        <span>WPF · React · UI Architecture</span>
      </h1>

      <p className="hero-description">
        WPF 기반 대규모 애플리케이션 개발 경험을 바탕으로,
        사용자 흐름과 제품 구조를 함께 설계하는 프론트엔드 개발자 은정안입니다.
        최근에는 React 기반 개인 프로젝트를 직접 기획·개발·배포하며 웹 제품화 경험을 넓히고 있습니다.
      </p>

      <div className="hero-summary" aria-label="profile summary">
        <span>8+ years frontend</span>
        <span>WPF / MVVM</span>
        <span>React / TypeScript</span>
      </div>

      <div className="hero-actions">
        <a className="pill-button pill-button--primary" href="#projects">
          view projects
        </a>

        <a className="pill-button" href="#resume">
          web resume
        </a>

        <a className="pill-button" href="#skills">
          skills
        </a>

        <a
          className="pill-button"
          href="https://github.com/coffee-and"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </div>
    </section>
  );
};

export default Hero;
