import { useState } from "react";
import {
  getProjectsByPresentation,
  type Project,
} from "../data/projects";
import "../styles/projects.css";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

const featuredProjects = getProjectsByPresentation("featured");
const earlierProjects = getProjectsByPresentation("archive");

const ProjectPreview = ({ project }: { project: Project }) => {
  const [hasImageFailed, setHasImageFailed] = useState(false);

  if (project.image && !hasImageFailed) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `${project.title} 프로젝트 화면`}
        width="1600"
        height="1000"
        loading="lazy"
        decoding="async"
        onError={() => setHasImageFailed(true)}
      />
    );
  }

  return (
    <span className="project-card__preview-placeholder">
      <span className="project-card__preview-index">
        {String(project.order).padStart(2, "0")} / featured work
      </span>
      <strong>{project.title}</strong>
      <em>{project.previewLabel}</em>
    </span>
  );
};

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="project-card__links">
    {project.demo && (
      <ExternalLink
        href={project.demo}
        ariaLabel={`${project.title} 배포 사이트 새 탭에서 열기`}
      >
        View Site
      </ExternalLink>
    )}

    {project.github && (
      <ExternalLink
        href={project.github}
        ariaLabel={`${project.title} GitHub 저장소 새 탭에서 열기`}
      >
        GitHub
      </ExternalLink>
    )}

    {project.repositoryNote && (
      <span className="project-card__repository-note">
        {project.repositoryNote}
      </span>
    )}
  </div>
);

const ProjectsSection = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenProjectId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="selected product work"
        description={`기획부터 화면 구조, 상태 흐름, 데이터 저장과 검증까지 직접 구현한 서비스입니다.
각 프로젝트의 완료 상태와 현재 미연동 범위를 구분해 표시했습니다.`}
      />

      <div className="project-tier-heading">
        <span>Featured Projects</span>
        <p>핵심 서비스 흐름을 구현 완료한 현재의 대표 작업입니다.</p>
      </div>

      <div className="project-list">
        {featuredProjects.map((project) => {
          const isOpen = openProjectId === project.id;
          const detailId = `project-detail-${project.id}`;

          return (
            <article
              key={project.id}
              className={`project-card ${isOpen ? "project-card--open" : ""}`}
            >
              <div className="project-card__layout">
                <div className="project-card__content">
                  <div className="project-card__badges" aria-label="프로젝트 상태">
                    <span data-status={project.status}>
                      {project.statusLabel}
                    </span>
                    <span>{project.scopeLabel}</span>
                  </div>

                  <button
                    type="button"
                    className="project-card__toggle"
                    onClick={() => handleToggle(project.id)}
                    aria-expanded={isOpen}
                    aria-controls={detailId}
                  >
                    <span className="project-card__title-group">
                      <span>{project.category}</span>
                      <span
                        className="project-card__title"
                        role="heading"
                        aria-level={3}
                      >
                        {project.title}
                      </span>
                    </span>

                    <em>{isOpen ? "Hide Details" : "View Details"}</em>
                  </button>

                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <ul
                    className="project-card__summary-points"
                    aria-label="대표 기능"
                  >
                    {project.cardHighlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="project-card__stack" aria-label="기술 스택">
                    {project.stack.slice(0, 6).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <ProjectLinks project={project} />
                </div>

                {project.demo ? (
                  <ExternalLink
                    className="project-card__preview"
                    href={project.demo}
                    ariaLabel={`${project.title} 배포 사이트 새 탭에서 열기`}
                  >
                    <ProjectPreview project={project} />
                  </ExternalLink>
                ) : (
                  <div className="project-card__preview">
                    <ProjectPreview project={project} />
                  </div>
                )}
              </div>

              <div
                id={detailId}
                className={`project-card__detail-wrap ${
                  isOpen ? "project-card__detail-wrap--open" : ""
                }`}
              >
                <div className="project-card__detail-inner">
                  <div className="project-card__detail">
                    {project.detailDescription && (
                      <p className="project-card__detail-description">
                        {project.detailDescription}
                      </p>
                    )}

                    <div className="project-card__detail-grid">
                      <div>
                        <span className="project-card__detail-label">
                          Purpose
                        </span>
                        <p>{project.purpose}</p>
                      </div>
                      <div>
                        <span className="project-card__detail-label">Role</span>
                        <p>{project.role}</p>
                      </div>
                    </div>

                    {project.users && (
                      <div className="project-card__users">
                        <span className="project-card__detail-label">
                          Users
                        </span>
                        <div>
                          {project.users.map((user) => (
                            <span key={user}>{user}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <span className="project-card__detail-label">
                      Implementation Highlights
                    </span>
                    <ul className="project-card__points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="project-card__scope-note">
                      <strong>현재 범위</strong>
                      <p>{project.scopeNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="earlier-work">
        <div className="project-tier-heading">
          <span>Earlier Work</span>
          <p>외부 API와 브라우저 저장 흐름을 다룬 이전 프로젝트입니다.</p>
        </div>

        {earlierProjects.map((project) => (
          <article className="archive-project-card" key={project.id}>
            <div className="archive-project-card__body">
              <div className="project-card__badges" aria-label="프로젝트 상태">
                <span data-status={project.status}>{project.statusLabel}</span>
                <span>{project.scopeLabel}</span>
              </div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__stack">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <ProjectLinks project={project} />
            </div>

            <div className="archive-project-card__visual">
              <ProjectPreview project={project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
