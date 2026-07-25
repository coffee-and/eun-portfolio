import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section className="about-editorial" id="about">
      <SectionHeader
        eyebrow="Approach"
        title="사용하기 좋은 화면과 오래 유지할 수 있는 구조를 함께 만듭니다"
        description={`업무 요구를 화면과 기능으로 정리하고, 상태·데이터·검증·배포를 하나의 제품 안에서 연결합니다.
구현한 범위와 아직 연결하지 않은 기능을 명확히 구분하며 실제 동작과 검증 결과를 기준으로 설명합니다.`}
      />

      <div className="about-editorial__statement">
        <p>
          금융과 기업용 솔루션, AI 머신비전 플랫폼에서 복잡한 제품을
          개발해왔습니다. 최근에는 React 서비스의 기획부터 인증, 저장,
          테스트와 배포까지 직접 맡으며 제품 중심 풀스택 역량을 확장했습니다.
        </p>
      </div>

      <div className="about-grid about-grid--editorial">
        <article className="info-card">
          <span>01 / Experience</span>
          <strong>8+ Years</strong>
          <p>금융·기업용 솔루션과 AI 머신비전 제품 개발 경험</p>
        </article>

        <article className="info-card">
          <span>02 / Product</span>
          <strong>2 Core Services</strong>
          <p>Moment ON과 Moment Play의 핵심 기능·계정·저장 구현 완료</p>
        </article>

        <article className="info-card">
          <span>03 / Proof</span>
          <strong>4 Project Films</strong>
          <p>채용, 코칭, 학원 운영과 코딩 학습 프로젝트의 실제 조작 영상</p>
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
