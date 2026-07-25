import ExternalLink from "./ExternalLink";

const Hero = () => {
  return (
    <section className="hero-section hero-editorial" id="home">
      <div className="hero-editorial__meta">
        <p className="eyebrow">Eun Jeongan · Portfolio 2026</p>
        <span>Product-focused Full-stack Engineer</span>
      </div>

      <div className="hero-editorial__layout">
        <div className="hero-editorial__title">
          <p>화면과 데이터, 기술 구조를 함께 설계합니다.</p>
          <h1>
            <span>사용하기 좋은 제품을 만들고,</span>
            <strong>검증과 배포까지 직접 연결합니다.</strong>
          </h1>
        </div>

        <div className="hero-editorial__side">
          <p className="hero-description">
            8년 이상의 제품 UI 개발 경험을 바탕으로 복잡한 요구를 이해하기 쉬운
            화면과 기능으로 정리합니다. WPF 기반 제품 개발 경험을 React,
            TypeScript, C#/.NET, Supabase 기반 서비스 구현으로 확장했습니다.
          </p>

          <div className="hero-summary" aria-label="profile summary">
            <span>8+ years software development</span>
            <span>WPF · React · TypeScript · C#/.NET</span>
            <span>2 core services · 4 project films</span>
          </div>

          <div className="hero-actions">
            <a className="pill-button pill-button--primary" href="#projects">
              selected work
            </a>
            <a className="pill-button" href="#career">
              career
            </a>
            <a className="pill-button" href="#/resume">
              web resume
            </a>
            <ExternalLink
              className="hero-text-link"
              href="https://github.com/coffee-and"
              ariaLabel="은정안 GitHub 프로필 새 탭에서 열기"
            >
              GitHub ↗
            </ExternalLink>
          </div>
        </div>
      </div>

      <a className="hero-editorial__next" href="#projects">
        <span>01</span>
        <strong>Selected Work</strong>
        <em>scroll to projects</em>
      </a>
    </section>
  );
};

export default Hero;
