import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionHeader
        eyebrow="About"
        title="제품의 전체 흐름을 끝까지 구현하는 개발자"
        description={`WPF 기반 대규모 제품 UI 경험을 React 웹 서비스와 크로스플랫폼 프로젝트로 확장했습니다.
역할이 다른 사용자의 흐름을 구조화하고 화면, 상태, 데이터와 검증을 연결하는 데 집중합니다.`}
      />

      <div className="about-grid">
        <article className="info-card">
          <strong>8+ Years</strong>
          <span>금융 서비스, 기업용 솔루션과 AI 머신비전 플랫폼에서 쌓은 제품 UI 개발 경험</span>
        </article>

        <article className="info-card">
          <strong>2 Core Services</strong>
          <span>Moment ON과 Moment Play의 핵심 서비스 흐름 구현 완료</span>
        </article>

        <article className="info-card">
          <strong>4 Video Demos</strong>
          <span>채용, 코칭, 학원 운영과 코딩 학습 프로토타입의 실제 사용자 흐름 공개</span>
        </article>

        <article className="info-card">
          <strong>Product & UX</strong>
          <span>역할별 사용자 흐름, 정보 구조와 상태 변화를 중심으로 한 UI 설계</span>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
