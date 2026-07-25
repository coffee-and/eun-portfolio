import { useState } from "react";
import {
  careerCards,
  profileCards,
  resumeHighlights,
  resumeProfile,
  resumeProjects,
  resumeSkills,
  skillIcons,
} from "../data/resume";
import type { ResumeProject } from "../data/resume";
import "../styles/resume.css";
import "../styles/resume-icons.css";
import BrandMark from "./BrandMark";
import ExternalLink from "./ExternalLink";
import YouTubeThumbnail from "./YouTubeThumbnail";

const PhotoshopIcon = () => (
  <svg
    className="resume-tech-icon__svg resume-tech-icon__svg--photoshop"
    viewBox="0 0 48 48"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect className="resume-tech-icon__svg-fill" x="5" y="5" width="38" height="38" rx="10" />
    <rect className="resume-tech-icon__svg-rim" x="8" y="8" width="32" height="32" rx="8" />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
    >
      Ps
    </text>
  </svg>
);

const ResumeProjectVisual = ({ project }: { project: ResumeProject }) => {
  const [hasImageFailed, setHasImageFailed] = useState(false);

  if (project.youtubeId) {
    return (
      <YouTubeThumbnail
        videoId={project.youtubeId}
        alt={`${project.title} 프로젝트 YouTube 데모 영상 썸네일`}
      />
    );
  }

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
    <span className="resume-project-card__placeholder">
      <span>{project.presentationLabel}</span>
      <strong>{project.title}</strong>
      <em>{project.previewLabel}</em>
    </span>
  );
};

const ResumeSection = () => {
  return (
    <main className="resume-page" id="resume">
      <header className="resume-page__nav">
        <a className="resume-page__brand" href="#/" aria-label="portfolio home">
          <BrandMark />
        </a>
        <a className="resume-page__back" href="#/">
          back to portfolio
        </a>
      </header>

      <section className="resume-hero" aria-label="web resume hero">
        <div className="resume-hero__intro">
          <span>Hello, I'm</span>
          <h1>{resumeProfile.name}</h1>
          <p>{resumeProfile.role}</p>
        </div>

        <div className="resume-hero__summary">
          <div className="resume-avatar-placeholder resume-avatar-placeholder--image">
            <img
              src={`${import.meta.env.BASE_URL}resume/profile.jpg`}
              alt={`${resumeProfile.name} profile`}
            />
          </div>

          <p>{resumeProfile.summary}</p>

          <div className="resume-contact-row">
            <a href={`mailto:${resumeProfile.email}`}>{resumeProfile.email}</a>
            <ExternalLink
              href={resumeProfile.github}
              ariaLabel="은정안 GitHub 프로필 새 탭에서 열기"
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={resumeProfile.youtube}
              ariaLabel="은정안 YouTube 개발 기록 채널 새 탭에서 열기"
            >
              YouTube
            </ExternalLink>
          </div>
        </div>
      </section>

      <div className="resume-layout">
        <aside className="resume-left-column">
          <section className="resume-panel resume-panel--profile">
            <span className="resume-panel__eyebrow">at a glance</span>
            <h2>Product-focused Full-stack Engineer</h2>
            <p>제품의 사용성과 기술 구조를 함께 설계하고, 화면부터 데이터와 배포까지 연결해 실제 제품으로 완성합니다.</p>

            <div className="resume-keywords">
              {resumeProfile.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </section>

          <section className="resume-panel">
            <span className="resume-panel__eyebrow">career & projects</span>
            <ul className="resume-check-list">
              {resumeHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="resume-right-column">
          <section className="resume-section-block">
            <div className="resume-section-title">
              <span>about me</span>
              <h2>Strengths & Focus</h2>
            </div>

            <div className="resume-card-grid">
              {profileCards.map((card) => (
                <article className="resume-info-card" key={card.title}>
                  <span>{card.meta}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="resume-tag-row">
                    {card.tags.map((tag) => (
                      <em key={tag}>#{tag}</em>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section-block">
            <div className="resume-section-title">
              <span>tech icons</span>
              <h2>개발 언어와 도구</h2>
            </div>

            <div className="resume-icon-grid">
              {skillIcons.map((skill) => (
                <div className="resume-tech-icon" key={skill.name}>
                  <span className="resume-tech-icon__mark">
                    {skill.iconVariant === "photoshop" ? (
                      <PhotoshopIcon />
                    ) : (
                      <>
                        {skill.icon && (
                          <img
                            src={skill.icon}
                            alt=""
                            aria-hidden="true"
                            onError={(event) => {
                              event.currentTarget.remove();
                            }}
                          />
                        )}
                        <strong>{skill.label}</strong>
                      </>
                    )}
                  </span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section-block">
            <div className="resume-section-title">
              <span>skill set</span>
              <h2>Core Skills</h2>
            </div>

            <div className="resume-skill-grid">
              {resumeSkills.map((group) => (
                <article className="resume-skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section-block">
            <div className="resume-section-title">
              <span>experience</span>
              <h2>Career</h2>
            </div>

            <div className="resume-card-grid resume-card-grid--career">
              {careerCards.map((card) => (
                <article
                  className="resume-info-card resume-info-card--career"
                  id={`resume-career-${card.id}`}
                  key={card.id}
                >
                  <header className="resume-career-card__header">
                    <span>{card.period}</span>
                    <h3>{card.title}</h3>
                    <strong>{card.meta}</strong>
                  </header>

                  <p className="resume-career-card__overview">{card.description}</p>

                  <section className="resume-career-card__work" aria-label={`${card.title} 주요 업무와 성과`}>
                    <span className="resume-career-card__label">work & impact</span>
                    <ol>
                      {card.highlights.map((highlight) => (
                        <li key={highlight.title}>
                          <strong>{highlight.title}</strong>
                          <p>{highlight.description}</p>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="resume-career-card__technology" aria-label={`${card.title} 사용 기술`}>
                    <span className="resume-career-card__label">technology</span>
                    <p>{card.tags.join(" · ")}</p>
                  </section>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section-block">
            <div className="resume-section-title">
              <span>featured · prototypes · earlier work</span>
              <h2>Selected Product Work</h2>
            </div>

            <div className="resume-project-list">
              {resumeProjects.map((project) => (
                <article className="resume-project-card" key={project.id}>
                  <div className="resume-project-card__image-slot">
                    <ResumeProjectVisual project={project} />
                  </div>

                  <div className="resume-project-card__body">
                    <div className="resume-project-card__head">
                      <div>
                        <span>{project.presentationLabel}</span>
                        <h3>{project.title}</h3>
                      </div>

                      {project.links && (
                        <div className="resume-project-card__links">
                          {project.links.map((link) => (
                            <ExternalLink
                              key={link.href}
                              href={link.href}
                              ariaLabel={`${project.title} ${link.label} 새 탭에서 열기`}
                            >
                              {link.label}
                            </ExternalLink>
                          ))}
                        </div>
                      )}
                    </div>

                    <div
                      className="resume-project-card__badges"
                      aria-label="프로젝트 상태"
                    >
                      <span>{project.statusLabel}</span>
                      <span>{project.scopeLabel}</span>
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

                    {project.repositoryNote && (
                      <p className="resume-project-card__repository-note">
                        {project.repositoryNote}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ResumeSection;
