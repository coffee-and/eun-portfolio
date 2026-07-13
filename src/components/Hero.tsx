const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <p className="eyebrow">portfolio / full-stack</p>

      <h1>
        full-stack. product engineer_
        <span>Product Architecture · End-to-End Development</span>
      </h1>

      <p className="hero-description">
        웹·모바일·데스크톱 애플리케이션의 사용자 화면부터 API, 데이터베이스와 배포 환경까지
        제품 전체를 설계하고 구현하는 Full-stack Engineer 은정안입니다.
        사용자 역할과 업무 흐름을 먼저 정의하고 실제 운영 가능한 제품 구조로 구체화합니다.
      </p>

      <div className="hero-summary" aria-label="profile summary">
        <span>8+ years product development</span>
        <span>Web / Mobile / Desktop</span>
        <span>React Native / NestJS / WPF</span>
      </div>

      <div className="hero-actions">
        <a className="pill-button pill-button--primary" href="#projects">view projects</a>
        <a className="pill-button" href="#/resume">web resume</a>
        <a className="pill-button" href="#skills">skills</a>
        <a className="pill-button" href="https://github.com/coffee-and" target="_blank" rel="noreferrer">github</a>
      </div>
    </section>
  );
};

export default Hero;
