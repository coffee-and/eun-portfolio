import { skillGroups } from "../data/skills";
import SectionHeader from "./SectionHeader";

const SkillsSection = () => {
  return (
    <section className="skills-editorial" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="기술 이름보다 실제 사용 범위를 보여드립니다"
        description="보유 기술은 한눈에 확인하고, 업무·서비스·프로토타입에서 사용한 구체적인 근거는 그룹별로 펼쳐볼 수 있습니다."
      />

      <div className="skills-editorial__groups">
        {skillGroups.map((group, groupIndex) => (
          <article className="skill-ledger" key={group.id}>
            <header>
              <span className="editorial-number">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </header>

            <ul
              className="skill-ledger__names"
              aria-label={`${group.title} 기술 목록`}
            >
              {group.items.map((item) => (
                <li key={`${group.id}-${item.name}`}>{item.name}</li>
              ))}
            </ul>

            <details className="skill-ledger__details">
              <summary>
                <span>기술별 사용 범위와 근거 보기</span>
                <em>{group.items.length} technologies</em>
              </summary>

              <div className="skill-ledger__table">
                {group.items.map((item) => (
                  <div className="skill-ledger__row" key={`${group.id}-${item.name}`}>
                    <strong>{item.name}</strong>
                    <span>{item.context}</span>
                    <p>{item.evidence}</p>
                  </div>
                ))}
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
