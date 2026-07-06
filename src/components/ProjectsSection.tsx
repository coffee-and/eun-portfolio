import { useState } from "react";
import { projects } from "../data/projects";
import "../styles/projects.css";
import SectionHeader from "./SectionHeader";

const ProjectsSection = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenProjectId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="personal projects"
        description={`개인 프로젝트를 통해 React 기반 웹서비스의 기획, UI 설계, API 연동,
상태 로직 분리, 정적 배포까지 직접 경험했습니다.`}
      />

      <div className="project-list">
        {projects.map((project) => {
          const isOpen = openProjectId === project.id;
          const detailId = `project-detail-${project.id}`;

          return (
            <article
              key={project.id}
              className={`project-card ${isOpen ? "project-card--open" : ""}`}
            >
              <div className="project-card__layout">
                <div className="project-card__content">
                  <button
                    type="button"
                    className="project-card__toggle"
                    onClick={() => handleToggle(project.id)}
                    aria-expanded={isOpen}
                    aria-controls={detailId}
                  >
                    <div>
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>

                    <em>{isOpen ? "Hide Details" : "View Details"}</em>
                  </button>

                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-card__stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        View Site
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <a
                  className="project-card__preview"
                  href={project.demo ?? project.github ?? "#projects"}
                  target={project.demo || project.github ? "_blank" : undefined}
                  rel={project.demo || project.github ? "noreferrer" : undefined}
                  aria-label={`${project.title} 사이트 열기`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? `${project.title} preview`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-card__preview-placeholder">
                      <span>{project.title}</span>
                      <em>{project.previewLabel ?? "Screenshot placeholder"}</em>
                    </div>
                  )}
                </a>
              </div>

              <div
                id={detailId}
                className={`project-card__detail-wrap ${
                  isOpen ? "project-card__detail-wrap--open" : ""
                }`}
              >
                <div className="project-card__detail-inner">
                  <div className="project-card__detail">
                    <p>Implementation Highlights</p>

                    <ul className="project-card__points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
