import ExternalLink from "./ExternalLink";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <p className="eyebrow">portfolio / product frontend</p>

      <h1>
        front-end engineer building product flows_
        <span>WPF · React · TypeScript · Product UI</span>
      </h1>

      <p className="hero-description">
        {`8년 이상의 WPF 제품 UI 경험을 React·TypeScript 서비스 구현으로 확장했습니다.
Moment ON과 Moment Play는 핵심 서비스 구현을 완료했고,
Local Job Match·CoachHub·Classory·Code Bridge의 전체 사용자 흐름을 네 편의 YouTube 데모로 공개했습니다.`}
      </p>

      <div className="hero-summary" aria-label="profile summary">
        <span>8+ years frontend</span>
        <span>2 core services completed</span>
        <span>4 project demos</span>
        <span>WPF · React · Product UI</span>
      </div>

      <div className="hero-actions">
        <a className="pill-button pill-button--primary" href="#projects">view projects</a>
        <a className="pill-button" href="#videos">watch demos</a>
        <a className="pill-button" href="#/resume">web resume</a>
        <ExternalLink
          className="pill-button"
          href="https://github.com/coffee-and"
          ariaLabel="은정안 GitHub 프로필 새 탭에서 열기"
        >
          github
        </ExternalLink>
      </div>
    </section>
  );
};

export default Hero;
