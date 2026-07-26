import { useState } from "react";
import {
  getProjectsByPresentation,
  type Project,
} from "../data/projects";
import type { DisclosureToggleHandler } from "../hooks/useExclusiveDisclosure";
import useExclusiveDisclosure from "../hooks/useExclusiveDisclosure";
import "../styles/projects.css";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

const featuredProjects = getProjectsByPresentation("featured");
const earlierProjects = getProjectsByPresentation("archive");

const ProjectVisual = ({ project }: { project: Project }) => {
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

  if (project.demo && project.presentation === "featured") {
    return (
      <div className="project-live-preview" aria-label={`${project.title} 실제 배포 화면 미리보기`}>
        <div className="project-live-preview__bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <em>{new URL(project.demo).hostname}</em>
        </div>
        <iframe
          src={project.demo}
          title={`${project.title} 배포 화면`}
          loading="lazy"
          tabIndex={-1}
        />
      </div>
    );
  }

  return (
    <span className="project-editorial-placeholder">
      <span>{String(project.order).padStart(2, "0")}</span>
      <strong>{project.title}</strong>
      <em>{project.previewLabel}</em>
    </span>
  );
};

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="project-editorial__links">
    {project.demo && (
      <ExternalLink
        href={project.demo}
        ariaLabel={`${project.title} 배포 사이트 새 탭에서 열기`}
      >
        View live product
      </ExternalLink>
    )}

    {project.github && (
      <ExternalLink
        href={project.github}
        ariaLabel={`${project.title} GitHub 저장소 새 탭에서 열기`}
      >
        GitHub repository
      </ExternalLink>
    )}

    {project.repositoryNote && (
      <span className="project-editorial__repository-note">
        {project.repositoryNote}
      </span>
    )}
  </div>
);

type FeaturedProjectProps = {
  project: Project;
  isOpen: boolean;
  onToggle: DisclosureToggleHandler;
};

const FeaturedProject = ({ project, isOpen, onToggle }: FeaturedProjectProps) => {
  const detailsId = `project-details-${project.id}`;

  return (
    <article className="project-editorial">
      <div className="project-editorial__intro">
        <span className="editorial-number">
          {String(project.order).padStart(2, "0")}
        </span>
        <p className="project-editorial__category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-editorial__description">{project.description}</p>

        <dl className="project-editorial__status">
          <div>
            <dt>Status</dt>
            <dd>{project.statusLabel}</dd>
          </div>
          <div>
            <dt>Current scope</dt>
            <dd>{project.scopeLabel}</dd>
          </div>
        </dl>

        <ul className="project-editorial__highlights" aria-label="대표 기능">
          {project.cardHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <p className="project-editorial__stack">
          {project.stack.slice(0, 7).join(" · ")}
        </p>

        <ProjectLinks project={project} />
      </div>

      <div className="project-editorial__visual">
        <ProjectVisual project={project} />
      </div>

      <details
        className="project-case-study"
        id={detailsId}
        open={isOpen}
        onToggle={(event) => onToggle(project.id, event.currentTarget.open)}
      >
        <summary aria-controls={`${detailsId}-content`}>
          <span>프로젝트 상세 보기</span>
          <em>purpose · role · implementation · scope</em>
        </summary>

        <div className="project-case-study__content" id={`${detailsId}-content`}>
          {project.detailDescription && (
            <p className="project-case-study__lead">
              {project.detailDescription}
            </p>
          )}

          <div className="project-case-study__grid">
            <section>
              <span>01 / Purpose</span>
              <h4>만든 이유</h4>
              <p>{project.purpose}</p>
            </section>
            <section>
              <span>02 / Role</span>
              <h4>담당 범위</h4>
              <p>{project.role}</p>
            </section>
            {project.users && (
              <section>
                <span>03 / Users</span>
                <h4>주요 사용자</h4>
                <p>{project.users.join(" · ")}</p>
              </section>
            )}
            <section>
              <span>04 / Current scope</span>
              <h4>현재 구현 범위</h4>
              <p>{project.scopeNote}</p>
            </section>
          </div>

          <section className="project-case-study__implementation">
            <span>05 / Implementation</span>
            <h4>구현 내용</h4>
            <ol>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </section>

          <section className="project-case-study__technology">
            <span>06 / Technology</span>
            <h4>사용 기술</h4>
            <p>{project.stack.join(" · ")}</p>
          </section>
        </div>
      </details>
    </article>
  );
};

const ProjectsSection = () => {
  const { openId, handleToggle } = useExclusiveDisclosure();
  const projectColumns = [
    featuredProjects.filter((_, index) => index % 2 === 0),
    featuredProjects.filter((_, index) => index % 2 === 1),
  ];

  return (
    <section className="projects-editorial" id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title="현재 운영 중인 대표 프로젝트"
        description="실제 배포된 화면과 주요 기능을 확인할 수 있습니다. 상세 보기에서는 프로젝트 목적, 담당 범위, 구현 내용과 현재 상태를 모두 확인할 수 있습니다."
      />

      <div className="projects-editorial__list">
        {projectColumns.map((projects, columnIndex) => (
          <div className="projects-editorial__column" key={columnIndex}>
            {projects.map((project) => (
              <FeaturedProject
                project={project}
                isOpen={openId === project.id}
                key={project.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="earlier-work earlier-work--editorial">
        <div className="project-tier-heading">
          <span>Earlier Work</span>
          <p>외부 API와 브라우저 저장 방식을 다룬 이전 프로젝트입니다.</p>
        </div>

        {earlierProjects.map((project) => (
          <article className="archive-project-editorial" key={project.id}>
            <div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong>{project.stack.join(" · ")}</strong>
              <ProjectLinks project={project} />
            </div>
            <div className="archive-project-editorial__visual">
              <ProjectVisual project={project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
