import SectionHeader from "./SectionHeader";

const highlights = [
  {
    label: "UI/UX Renewal",
    title: "VPDL UI/UX 전면 리뉴얼",
    description:
      "사용자 워크플로우를 기준으로 화면 구조와 공통 스타일을 재정비해 제품 사용성과 유지보수성을 함께 개선했습니다.",
    result: "UI 관련 고객 문의 20% 이상 감소",
  },
  {
    label: "Migration",
    title: "VPDL–SuaKit Migration Plugin",
    description:
      "기존 SuaKit 프로젝트를 VPDL 환경에서 사용할 수 있도록 버전별 데이터 구조를 분석하고 자동 변환 로직을 구현했습니다.",
    result: "고객 전환 부담 및 기술 지원 시간 감소",
  },
  {
    label: "DevOps",
    title: "배포 및 테스트 환경 개선",
    description:
      "TeamCity 기반 CI/CD 환경을 개선하고, AWS EC2 테스트 환경과 InstallShield 기반 설치 패키지 자동화 작업을 수행했습니다.",
    result: "릴리즈 품질과 배포 효율 개선",
  },
];

const CareerHighlightsSection = () => {
  return (
    <section className="career-highlights-section" id="career">
      <SectionHeader
        eyebrow="Career Highlights"
        title="제품을 더 쉽게 쓰이게 만든 경험"
        description={`회사 프로젝트에서는 단순 기능 구현보다, 사용자의 실제 업무 흐름과 운영 안정성을 함께 고려했습니다.`}
      />

      <div className="highlight-list">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.title}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <strong>{item.result}</strong>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CareerHighlightsSection;
