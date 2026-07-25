import { skillGroups } from "../data/skills";
import SectionHeader from "./SectionHeader";

const SkillsSection = () => {
  return (
    <section className="skills-editorial" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="기술 이름보다 실제 사용 범위를 보여드립니다"
        description="업무에서 깊게 사용한 기술, 직접 만든 서비스, 기능형 프로토타입과 보조 도구를 구분해 정리했습니다."
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

            <div className="skill-ledger__table">
              {group.items.map((item) => (
                <div className="skill-ledger__row" key={`${group.id}-${item.name}`}>
                  <strong>{item.name}</strong>
                  <span>{item.context}</span>
                  <p>{item.evidence}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
