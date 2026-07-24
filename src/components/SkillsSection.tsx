import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    title: "Frontend & Platform",
    skills: [
      "C#",
      "WPF",
      "WinForms",
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Expo",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "State & Interaction",
    skills: [
      "MVVM",
      "UI Architecture",
      "Plugin Architecture",
      "Migration",
      "Workflow Design",
      "UI/UX Improvement",
      "React Router",
      "Zustand",
      "dnd-kit",
      "Konva",
      "React Konva",
    ],
  },
  {
    title: "Data & Backend",
    skills: [
      ".NET Framework",
      "ASP.NET",
      "REST API",
      "JSON",
      "MSSQL",
      "Supabase",
      "PostgreSQL",
      "LocalStorage",
    ],
  },
  {
    title: "Quality & Delivery",
    skills: [
      "Vitest",
      "React Testing Library",
      "Playwright",
      "ESLint",
      "Vite",
      "npm workspaces",
      "pnpm monorepo",
      "GitHub Actions",
      "GitHub Pages",
      "Capacitor",
      "AWS EC2",
      "TeamCity",
      "InstallShield",
      "NSIS",
      "Git",
      "Jira",
      "Confluence",
      "Figma",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="기술보다 문제 해결 흐름을 먼저 봅니다"
        description="제품의 구조와 사용자 흐름을 이해하고, 반복해서 사용해 검증한 기술과 프로젝트 범위에 필요한 도구를 구분해 적용합니다."
      />

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
