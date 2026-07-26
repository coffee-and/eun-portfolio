import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section className="about-editorial" id="about">
      <SectionHeader
        eyebrow="Approach"
        title="사용하기 편한 화면과 확장 가능한 구조로 제품을 만듭니다"
        description="복잡한 요구사항을 화면과 기능으로 정리하고, 상태·데이터·검증·배포를 고려해 실제로 동작하는 결과로 구현합니다."
      />

      <div className="about-editorial__statement">
        <p>
          금융 서비스와 기업용 솔루션, <strong className="text-accent">AI 머신비전 플랫폼</strong>에서
          제품을 개발했습니다. <strong className="text-accent">WPF·MVVM 기반 대규모 애플리케이션</strong>의
          화면 구조와 사용성을 개선했고, 최근에는 <strong className="text-accent">React 서비스</strong>의
          기획부터 인증, 저장, 테스트와 배포까지 직접 맡고 있습니다.
        </p>
        <p>
          기술 이름을 많이 나열하기보다 어떤 제품에서 무엇을 맡았고,
          <strong className="text-accent"> 어떤 문제를 어떻게 개선했는지</strong>를 구체적으로 보여주는
          포트폴리오를 만들었습니다.
        </p>
      </div>

      <div className="about-grid about-grid--editorial">
        <article className="info-card">
          <span>01 / Experience</span>
          <strong>8+ Years</strong>
          <p>금융·기업용 솔루션과 AI 머신비전 제품 개발</p>
        </article>

        <article className="info-card">
          <span>02 / Product</span>
          <strong>2 Core Services</strong>
          <p>Moment ON과 Moment Play의 핵심 기능·계정·저장 구현</p>
        </article>

        <article className="info-card">
          <span>03 / Proof</span>
          <strong>4 Project Films</strong>
          <p>역할별 기능과 실제 조작을 확인할 수 있는 데모 영상</p>
        </article>

        <article className="info-card">
          <span>04 / Range</span>
          <strong>UI to Delivery</strong>
          <p>화면, 데이터 처리, 검증과 배포를 연결하는 제품 개발</p>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
