const Hero = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section className="hero-section" id="home">
      <p className="eyebrow">Front-end Engineer</p>

      <h1>
        은정안
        <span>UI Architecture · Product Development</span>
      </h1>

      <p className="hero-description">
        WPF 기반 대규모 애플리케이션 개발 경험을 바탕으로,
        <br />
        사용자 흐름과 제품 구조를 함께 고민하는 프론트엔드 개발자입니다.
        <br />
        최근에는 React 기반 개인 프로젝트를 직접 기획·개발·배포하며 웹
        프론트엔드 역량을 확장하고 있습니다.
      </p>

      <div className="hero-actions">
        <a className="pill-button pill-button--primary" href="#projects">
          View Projects
        </a>

        <a className="pill-button" href="#skills">
          Skills
        </a>

        <a
          className="pill-button"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Resume PDF
        </a>

        <a
          className="pill-button"
          href="https://github.com/coffee-and"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
