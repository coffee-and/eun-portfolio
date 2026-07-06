import {
  resumeHighlights,
  resumeProfile,
  resumeProjects,
  resumeSkills,
} from "../data/resume";
import SectionHeader from "./SectionHeader";

const ResumeSection = () => {
  return (
    <section className="resume-section" id="resume">
      <SectionHeader
        eyebrow="Digital Resume"
        title="web resume"
        description="PDF 대신 웹에서 바로 확인할 수 있는 이력서 섹션입니다. 현재 진행 중인 개인 프로젝트와 제품화 경험을 중심으로 정리했습니다."
      />

      <div className="resume-shell" aria-label="Eun Jeongan web resume">
        <aside className="resume-sidebar">
          <div className="resume-profile-card">
            <span className="resume-profile-card__label">profile</span>
            <h3>{resumeProfile.name}</h3>
            <p>{resumeProfile.role}</p>

            <div className="resume-keywords">
              {resumeProfile.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>

          <div className="resume-block">
            <h4>focus</h4>
            <ul>
              {resumeHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="resume-main">
          <article className="resume-intro-card">
            <span>about resume</span>
            <h3>사용자 흐름을 제품 구조로 바꾸는 프론트엔드 개발자</h3>
            <p>{resumeProfile.summary}</p>
          </article>

          <div className="resume-block resume-block--wide">
            <div className="resume-block__heading">
              <span>skill set</span>
              <h3>Core Skills</h3>
            </div>

            <div className="resume-skill-grid">
              {resumeSkills.map((group) => (
                <article className="resume-skill-card" key={group.title}>
                  <h4>{group.title}</h4>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="resume-block resume-block--wide">
            <div className="resume-block__heading">
              <span>personal projects</span>
              <h3>Currently Building</h3>
            </div>

            <div className="resume-project-list">
              {resumeProjects.map((project) => (
                <article className="resume-project-card" key={project.id}>
                  <div className="resume-project-card__head">
                    <div>
                      <span>{project.status}</span>
                      <h4>{project.title}</h4>
                    </div>

                    {project.links && (
                      <div className="resume-project-card__links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <p>{project.summary}</p>

                  <div className="resume-project-card__stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
