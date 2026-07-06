import {
  careerCards,
  profileCards,
  resumeHighlights,
  resumeProfile,
  resumeProjects,
  resumeSkills,
  skillIcons,
} from "../data/resume";
import "../styles/resume.css";

const ResumeSection = () => {
  return (
    <main className="resume-page" id="resume">
      <header className="resume-page__nav">
        <a className="resume-page__brand" href="#/">
          eun.
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
            <a href={resumeProfile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="resume-layout">
        <aside className="resume-left-column">
          <section className="resume-panel resume-panel--profile">
            <span className="resume-panel__eyebrow">at a glance</span>
            <h2>Product UI Developer</h2>
            <p>WPF 기반 제품 개발 경험을 React 기반 개인 서비스 제작으로 확장하고 있습니다.</p>

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
                <article className="resume-info-card resume-info-card--career" key={card.title}>
                  <span>{card.period}</span>
                  <h3>{card.title}</h3>
                  <strong>{card.meta}</strong>
                  <p>{card.description}</p>
                  {card.points && (
                    <ul className="resume-card-points">
                      {card.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
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
              <span>personal projects</span>
              <h2>Current Projects</h2>
            </div>

            <div className="resume-project-list">
              {resumeProjects.map((project) => (
                <article className="resume-project-card" key={project.id}>
                  <div className="resume-project-card__image-slot">
                    <span>screenshot</span>
                    <em>{project.imageSlot}</em>
                  </div>

                  <div className="resume-project-card__body">
                    <div className="resume-project-card__head">
                      <div>
                        <span>{project.status}</span>
                        <h3>{project.title}</h3>
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
