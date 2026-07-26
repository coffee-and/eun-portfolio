import type { Career, CareerProject } from "../data/careers";
import { getCompanyDisplayName } from "../utils/companyNames";

type CareerStoryProps = {
  career: Career;
};

type CareerProjectCardProps = {
  project: CareerProject;
  index: number;
};

const CareerProjectCard = ({ project, index }: CareerProjectCardProps) => (
  <article className="career-project">
    <div className="career-project__title">
      <span>{String(index + 1).padStart(2, "0")}</span>
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
);

const CareerStory = ({ career }: CareerStoryProps) => {
  const companyName = getCompanyDisplayName(career);

  return (
    <article
      className="career-story"
      id={`career-${career.id}`}
    >
      <header className="career-story__header">
        <span className="editorial-number">
          {String(career.order).padStart(2, "0")}
        </span>
        <div>
          <p>{career.period}</p>
          <h3>{companyName}</h3>
          <strong>{career.role}</strong>
        </div>
      </header>

      <div className="career-story__lead">
        <p>{career.overview}</p>
        <div className="career-story__meta">
          <ul aria-label={`${companyName} 산업 분야`}>
            {career.domain.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="career-story__technology-summary">
            <span>Core technologies</span>
            {career.technologies.join(" · ")}
          </p>
        </div>
      </div>

      <details className="career-story__details">
        <summary>
          <span>담당 업무와 프로젝트 전체 보기</span>
          <em>
            {career.responsibilities.length} responsibilities · {career.projects.length} projects
          </em>
        </summary>

        <div className="career-story__details-content">
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
                <CareerProjectCard
                  index={projectIndex}
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </section>
        </div>
      </details>
    </article>
  );
};

export default CareerStory;
