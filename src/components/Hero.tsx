import ExternalLink from "./ExternalLink";

const Hero = () => {
  return (
    <section className="hero-section hero-editorial" id="home">
      <div className="hero-editorial__meta">
        <p className="eyebrow">portfolio / product full-stack</p>
        <span>Based in Korea · 8+ years</span>
      </div>

      <h1>
        <span className="hero-editorial__headline-line">
          제품의 사용성과 기술 구조를
        </span>
        <strong className="hero-editorial__headline-line">
          함께 설계해 실제 제품으로 완성합니다.
        </strong>
        <span className="hero-editorial__role">
          Product-focused Full-stack Engineer · WPF · React · TypeScript ·
          C#/.NET · Supabase
        </span>
      </h1>

      <div className="hero-editorial__bottom">
        <p className="hero-description">
          8년 이상의 제품 UI 개발 경험을 바탕으로 화면 구성, 인증, 데이터 저장,
          검증과 배포까지 직접 연결해왔습니다. 복잡한 요구사항을 사용하기 좋은
          제품으로 정리하고 운영과 확장을 고려한 구조로 구현합니다.
        </p>

        <div className="hero-summary" aria-label="profile summary">
          <span>8+ years software development</span>
          <span>product UI & full-stack</span>
          <span>2 core services completed</span>
          <span>4 project films</span>
        </div>
      </div>

      <div className="hero-actions">
        <a className="pill-button pill-button--primary" href="#projects">
          view selected work
        </a>
        <a className="pill-button" href="#career">
          career in detail
        </a>
        <a className="pill-button" href="#ask-eun">
          ask eun
        </a>
        <a className="pill-button" href="#/resume">
          web resume
        </a>
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
