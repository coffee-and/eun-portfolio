import { careers } from "../data/careers";
import { getCompanyDisplayName } from "../utils/companyNames";
import CareerStory from "./CareerStory";
import SectionHeader from "./SectionHeader";

const CareerHighlightsSection = () => {
  return (
    <section className="career-editorial" id="career">
      <SectionHeader
        eyebrow="Career"
        title="회사별 제품 개발과 주요 성과"
        description="회사별 역할과 핵심 경험은 바로 확인하고, 담당 업무와 프로젝트 전체 내용은 필요한 회사부터 펼쳐볼 수 있습니다."
      />

      <nav className="career-index" aria-label="회사별 경력 바로가기">
        {careers.map((career) => {
          const companyName = getCompanyDisplayName(career);

          return (
            <a key={career.id} href={`#career-${career.id}`}>
              <span>{String(career.order).padStart(2, "0")}</span>
              <strong>{companyName}</strong>
              <em>{career.period}</em>
            </a>
          );
        })}
      </nav>

      <div className="career-stories">
        {careers.map((career) => (
          <CareerStory career={career} key={career.id} />
        ))}
      </div>
    </section>
  );
};

export default CareerHighlightsSection;
