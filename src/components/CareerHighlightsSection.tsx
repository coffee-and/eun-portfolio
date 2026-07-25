import { careers } from "../data/careers";
import SectionHeader from "./SectionHeader";

const CareerHighlightsSection = () => {
  return (
    <section className="career-editorial" id="career">
      <SectionHeader
        eyebrow="Career"
        title="실무에서 맡은 제품과 개선 경험"
        description={`회사별로 담당한 제품과 역할, 직접 개선한 기능과 그 결과를 빠짐없이 정리했습니다.`}
      />

      <nav className="career-index" aria-label="회사별 경력 바로가기">
        {careers.map((career) => (
          <a key={career.id} href={`#career-${career.id}`}>
            <span>{String(career.order).padStart(2, "0")}</span>
            <strong>{career.company}</strong>
            <em>{career.period}</em>
          </a>
        ))}
      </nav>

      <div className="career-stories">
        {careers.map((career) => (
          <article
            className="career-story"
            id={`career-${career.id}`}
            key={career.id}
          >
            <header className="career-story__header">
              <span className="editorial-number">
                {String(career.order).padStart(2, "0")}
              </span>
              <div>
                <p>{career.period}</p>
                <h3>{career.company}</h3>
                <strong>{career.role}</strong>
              </div>
            </header>

            <div className="career-story__lead">
              <p>{career.overview}</p>
              <ul aria-label={`${career.company} 산업 분야`}>
                {career.domain.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <section className="career-chapter">
              <div className="career-chapter__heading">
                <span>01</span>
                <h4>담당 업무</h4>
              </div>
              <ul className="editorial-list">
                {career.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="career-chapter">
              <div className="career-chapter__heading">
                <span>02</span>
                <h4>주요 프로젝트와 개선 내용</h4>
              </div>

              <div className="career-projects">
                {career.projects.map((project, projectIndex) => (
                  <article className="career-project" key={project.title}>
                    <div className="career-project__title">
                      <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                      <h5>{project.title}</h5>
                    </div>

                    <div className="career-project__context">
                      <strong>Background</strong>
                      <p>{project.context}</p>
                    </div>

                    <div className="career-project__columns">
                      <div>
                        <strong>Implementation</strong>
                        <ul>
                          {project.work.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <strong>Result</strong>
                        <ul>
                          {project.result.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="career-project__technologies">
                      {project.technologies.join(" · ")}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="career-chapter career-chapter--technologies">
              <div className="career-chapter__heading">
                <span>03</span>
                <h4>사용 기술</h4>
              </div>
              <p>{career.technologies.join(" · ")}</p>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CareerHighlightsSection;
