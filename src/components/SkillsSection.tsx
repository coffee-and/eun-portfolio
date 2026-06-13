import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "C#",
      "WPF",
      "WinForms",
      "JavaScript",
      "TypeScript",
      "Angular",
      "React",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Architecture & Product",
    skills: [
      "MVVM",
      "UI Architecture",
      "Plugin Architecture",
      "Migration",
      "Workflow Design",
      "UI/UX Improvement",
    ],
  },
  {
    title: "API & Data",
    skills: [
      ".NET Framework",
      "ASP.NET",
      "REST API",
      "JSON",
      "MSSQL",
      "PostgreSQL",
    ],
  },
  {
    title: "DevOps & Collaboration",
    skills: [
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
        description={`제품의 구조와 사용자 흐름을 이해하고, 필요한 기술을 선택해 안정적으로 구현하는 데 집중합니다.`}
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
