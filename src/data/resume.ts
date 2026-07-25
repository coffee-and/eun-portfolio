import { careers } from "./careers";
import {
  projects,
  type ProjectPresentation,
} from "./projects";
import { skillGroups } from "./skills";

export type SkillIcon = {
  name: string;
  label: string;
  icon?: string;
  iconVariant?: "photoshop";
};

export type ResumeCard = {
  title: string;
  period?: string;
  meta?: string;
  tags: string[];
  description: string;
  points?: string[];
};

export type ResumeProject = {
  id: string;
  title: string;
  statusLabel: string;
  scopeLabel: string;
  presentationLabel: string;
  summary: string;
  stack: string[];
  points: string[];
  links?: {
    label: string;
    href: string;
  }[];
  repositoryNote?: string;
  image?: string;
  imageAlt?: string;
  youtubeId?: string;
  previewLabel: string;
};

export const resumeProfile = {
  name: "은정안",
  role: "Product-focused Full-stack Engineer / Product UI Developer",
  email: "annn@kakao.com",
  github: "https://github.com/coffee-and",
  youtube: "https://www.youtube.com/channel/UCpxd-LVHF2ImmVCxRpSx2SA",
  summary:
    "8년 이상의 제품 UI 개발 경험을 바탕으로 제품의 사용성과 기술 구조를 함께 설계하는 풀스택 개발자입니다. WPF·MVVM 기반 대규모 애플리케이션과 AI 머신비전 플랫폼을 개발했고, 최근에는 React·TypeScript·Supabase로 화면 구성, 인증, 데이터 저장, 검증과 배포까지 직접 연결한 서비스를 만들었습니다. Moment ON과 Moment Play의 핵심 기능을 구현했으며 Local Job Match·CoachHub·Classory·Code Bridge의 실제 조작 과정을 영상으로 공개했습니다.",
  keywords: [
    "8+ Years",
    "Product Full-stack",
    "WPF / MVVM",
    "React / TypeScript",
    "C# / .NET",
    "Supabase",
  ],
};

export const profileCards: ResumeCard[] = [
  {
    title: "제품의 사용성과 기술 구조를 함께 설계",
    meta: "화면 · 상태 · 데이터 · 검증 · 배포",
    tags: ["product usability", "architecture", "delivery"],
    description:
      "요구사항을 화면에 옮기는 데서 끝내지 않고 사용하기 편한 기능 구성, 상태와 데이터 처리, 오류 조건과 배포 이후의 검증까지 함께 고려합니다.",
  },
  {
    title: "대규모 WPF 제품 개발 경험",
    meta: "AI 머신비전 플랫폼 · MVVM · Plugin",
    tags: ["wpf", "mvvm", "plugin architecture"],
    description:
      "코그넥스 VPDL에서 UI/UX 리뉴얼, VIDI·SuaKit·VPDL 통합, Migration·Easy UI Plugin, 작업 기록과 Excel 리포트를 개발했습니다.",
  },
  {
    title: "React 기반 제품 서비스 구현",
    meta: "인증 · 저장 · 관리자 · 테스트",
    tags: ["react", "supabase", "product engineering"],
    description:
      "Moment ON과 Moment Play에서는 계정, 콘텐츠·게임, 사용자별 저장, 검증과 배포를 구현했습니다. 역할별 프로젝트 네 편은 Functional Prototype과 영상으로 공개했습니다.",
  },
  {
    title: "운영과 확장을 고려한 구현",
    meta: "호환성 · 복구 · CI/CD · 패키징",
    tags: ["maintainability", "testing", "deployment"],
    description:
      "레거시 프로젝트 변환, 손상 데이터 검증, 저장 실패 복구, 테스트 자동화와 설치·배포 환경까지 제품이 반복해서 검증될 수 있는 기반을 만듭니다.",
  },
];

export const resumeHighlights = [
  "AI 플랫폼 UI/UX 전면 리뉴얼과 공통 디자인 체계 구축",
  "UI 관련 고객 문의 20% 이상 감소에 기여",
  "SuaKit 프로젝트의 VPDL 전환을 자동화한 Migration Plugin 개발",
  "Easy UI Plugin, 사용자 작업 기록과 Excel 리포트 구현",
  "TeamCity·AWS EC2·InstallShield·NSIS 기반 검증·설치·배포 환경 개선",
  "Moment ON의 콘텐츠·계정·회원·비회원 저장·리포트 구현",
  "Moment Play의 14종 게임·랭킹·친구·초대 기능 구현",
  "채용·코칭·학원 운영·코딩 학습 프로젝트의 역할별 작업 과정 구현",
  "4개 프로젝트 데모 영상 YouTube 공개",
];

export const skillIcons: SkillIcon[] = [
  { name: "C#", label: "C#", icon: `${import.meta.env.BASE_URL}icons/csharp.svg` },
  { name: "WPF", label: "WPF", icon: `${import.meta.env.BASE_URL}icons/wpf.svg` },
  { name: "React", label: "React", icon: `${import.meta.env.BASE_URL}icons/react.svg` },
  { name: "TypeScript", label: "TS", icon: `${import.meta.env.BASE_URL}icons/typescript.svg` },
  { name: "JavaScript", label: "JS", icon: `${import.meta.env.BASE_URL}icons/javascript.svg` },
  { name: "Python", label: "PY", icon: `${import.meta.env.BASE_URL}icons/python.svg` },
  { name: "FastAPI", label: "API", icon: `${import.meta.env.BASE_URL}icons/fastapi.svg` },
  { name: "HTML5", label: "H5", icon: `${import.meta.env.BASE_URL}icons/html5.svg` },
  { name: "CSS3", label: "CSS", icon: `${import.meta.env.BASE_URL}icons/css3.svg` },
  { name: "Supabase", label: "SB", icon: `${import.meta.env.BASE_URL}icons/supabase.svg` },
  { name: "PostgreSQL", label: "PG", icon: `${import.meta.env.BASE_URL}icons/postgresql.svg` },
  { name: "Git", label: "Git", icon: `${import.meta.env.BASE_URL}icons/git.svg` },
  { name: "GitHub", label: "GH", icon: `${import.meta.env.BASE_URL}icons/github.svg` },
  { name: "Jira", label: "Jira", icon: `${import.meta.env.BASE_URL}icons/jira.svg` },
  { name: "Figma", label: "Fg", icon: `${import.meta.env.BASE_URL}icons/figma.svg` },
  { name: "Photoshop", label: "Ps", iconVariant: "photoshop" },
  { name: "AWS EC2", label: "AWS", icon: `${import.meta.env.BASE_URL}icons/aws.svg` },
];

export const resumeSkills = skillGroups.map((group) => ({
  title: group.title,
  items: group.items.map((item) => item.name),
}));

export const careerCards: ResumeCard[] = careers.map((career) => ({
  title: career.company,
  period: career.period,
  meta: career.role,
  tags: career.technologies.slice(0, 6),
  description: career.overview,
  points: [
    ...career.responsibilities,
    ...career.projects.flatMap((project) => [
      `${project.title} — ${project.context}`,
      ...project.work,
      ...project.result.map((result) => `${project.title} 결과 — ${result}`),
    ]),
  ],
}));

const presentationLabels: Record<ProjectPresentation, string> = {
  featured: "Featured",
  "video-demo": "Selected Prototype",
  archive: "Earlier Work",
};

export const resumeProjects: ResumeProject[] = projects.map((project) => {
  const links = [
    ...(project.demo
      ? [{ label: "View Site", href: project.demo }]
      : []),
    ...(project.youtubeUrl
      ? [{ label: "YouTube Demo", href: project.youtubeUrl }]
      : []),
    ...(project.github
      ? [{ label: "GitHub", href: project.github }]
      : []),
  ];

  return {
    id: project.id,
    title: project.title,
    statusLabel: project.statusLabel,
    scopeLabel: project.scopeLabel,
    presentationLabel: presentationLabels[project.presentation],
    summary: project.description,
    stack: project.stack,
    points: project.points,
    links: links.length > 0 ? links : undefined,
    repositoryNote: project.repositoryNote,
    image: project.image,
    imageAlt: project.imageAlt,
    youtubeId: project.youtubeId,
    previewLabel: project.previewLabel,
  };
});
