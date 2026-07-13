import {
  useEffect,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { projects, type ProjectLink } from "../data/projects";
import "../styles/projects.css";
import SectionHeader from "./SectionHeader";

type ActiveVideo = {
  title: string;
  url: string;
};

const getYouTubeEmbedUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] ?? "";
    }

    if (parsedUrl.hostname.endsWith("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v") ?? "";
      }

      if (
        parsedUrl.pathname.startsWith("/shorts/") ||
        parsedUrl.pathname.startsWith("/embed/")
      ) {
        videoId = parsedUrl.pathname.split("/").filter(Boolean)[1] ?? "";
      }
    }

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
      : url;
  } catch {
    return url;
  }
};

const ProjectsSection = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const handleToggle = (id: string) => {
    setOpenProjectId((currentId) => (currentId === id ? null : id));
  };

  const openVideo = (title: string, link: ProjectLink) => {
    setActiveVideo({ title, url: getYouTubeEmbedUrl(link.href) });
  };

  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const handleModalMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setActiveVideo(null);
    }
  };

  return (
    <>
      <section id="projects">
        <SectionHeader
          eyebrow="Projects"
          title="product projects"
          description={`웹·모바일·데스크톱 경험을 바탕으로 사용자 역할, 화면, API와 데이터 구조를 함께 설계한 제품 프로젝트입니다.
현재 개발 단계와 공개 가능한 링크를 프로젝트별로 구분해 표시했습니다.`}
        />

        <div className="project-list">
          {projects.map((project) => {
            const isOpen = openProjectId === project.id;
            const detailId = `project-detail-${project.id}`;
            const primaryLink = project.links?.find((link) => link.type !== "video");
            const videoLink = project.links?.find((link) => link.type === "video");

            const previewContent = project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt ?? `${project.title} preview`}
                loading="lazy"
              />
            ) : (
              <div className="project-card__preview-placeholder">
                <span>{project.title}</span>
                <em>{project.previewLabel ?? "Screenshot coming soon"}</em>
              </div>
            );

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
                        <div className="project-card__meta">
                          <span>{project.category}</span>
                          <small>{project.status}</small>
                        </div>
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

                    {project.links && project.links.length > 0 && (
                      <div className="project-card__links">
                        {project.links.map((link) =>
                          link.type === "video" ? (
                            <button
                              key={`${project.id}-${link.href}`}
                              type="button"
                              onClick={() => openVideo(project.title, link)}
                            >
                              {link.label}
                            </button>
                          ) : (
                            <a
                              key={`${project.id}-${link.href}`}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.label}
                            </a>
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  {primaryLink ? (
                    <a
                      className="project-card__preview"
                      href={primaryLink.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} 링크 열기`}
                    >
                      {previewContent}
                    </a>
                  ) : videoLink ? (
                    <button
                      type="button"
                      className="project-card__preview project-card__preview--button"
                      onClick={() => openVideo(project.title, videoLink)}
                      aria-label={`${project.title} 소개 영상 재생`}
                    >
                      {previewContent}
                    </button>
                  ) : (
                    <div className="project-card__preview">{previewContent}</div>
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

      {activeVideo && (
        <div
          className="project-video-modal"
          role="presentation"
          onMouseDown={handleModalMouseDown}
        >
          <div
            className="project-video-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-video-title"
          >
            <div className="project-video-modal__header">
              <div>
                <span>Project Demo</span>
                <h2 id="project-video-title">{activeVideo.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="영상 닫기"
                autoFocus
              >
                Close
              </button>
            </div>

            <div className="project-video-modal__frame">
              <iframe
                src={activeVideo.url}
                title={`${activeVideo.title} 프로젝트 소개 영상`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
