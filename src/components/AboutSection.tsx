import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionHeader
        eyebrow="About"
        title="사용자 흐름과 제품 구조를 함께 고민하는 개발자"
        description={`금융 서비스, 기업용 솔루션, AI 머신비전 플랫폼 등 다양한 도메인에서
          사용자 인터페이스 개발과 시스템 개선을 수행해왔습니다.`}
      />

      <div className="about-grid">
        <article className="info-card">
          <strong>8+ Years</strong>
          <span>{`금융 서비스부터 기업용 솔루션,
          AI 머신비전 플랫폼까지 이어진 개발 경험`}</span>
        </article>

        <article className="info-card">
          <strong>Product & UX</strong>
          <span>{`사용자 워크플로우를 기준으로 한
          UI/UX 개선과 제품 구조 설계`}</span>
        </article>

        <article className="info-card">
          <strong>Frontend</strong>
          <span>{`WPF 중심의 대규모 UI 개발과
          Angular · React 기반 프론트엔드 경험`}</span>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
