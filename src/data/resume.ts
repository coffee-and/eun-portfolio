import {
  projects,
  type ProjectPresentation,
} from "./projects";

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
  role: "Front-end Engineer / Product UI Developer",
  email: "annn@kakao.com",
  github: "https://github.com/coffee-and",
  youtube: "https://www.youtube.com/channel/UCpxd-LVHF2ImmVCxRpSx2SA",
  summary:
    "8년 이상의 개발 경력을 바탕으로 복잡한 제품을 더 쉽게 사용할 수 있도록 만드는 프론트엔드 개발자입니다. WPF 기반 대규모 애플리케이션 개발과 AI 머신비전 플랫폼 UI/UX 개선 경험을 React 기반 서비스 구현으로 확장했습니다. 최근에는 Moment ON과 Moment Play의 핵심 서비스 흐름을 구현하고, Local Job Match·CoachHub·Classory·Code Bridge의 역할별 사용자 경험을 기능형 프로토타입과 YouTube 데모로 공개했습니다.",
  keywords: [
    "8+ Years",
    "WPF / MVVM",
    "React",
    "Product UI",
    "Service Architecture",
    "Functional Prototype",
  ],
};

export const profileCards: ResumeCard[] = [
  {
    title: "Product UI 중심 개발자",
    meta: "사용자 흐름 · 화면 구조 · 제품 완성도",
    tags: ["workflow", "ui architecture", "ux improvement"],
    description:
      "단순 화면 구현보다 사용자가 실제로 어떤 순서로 기능을 이해하고 사용하는지 먼저 봅니다. 복잡한 업무 흐름을 화면 구조로 풀어내고, 반복되는 UI 요소는 재사용 가능한 구조로 정리하는 데 강점이 있습니다.",
  },
  {
    title: "대규모 WPF 애플리케이션 경험",
    meta: "AI 머신비전 플랫폼 · MVVM · Plugin",
    tags: ["wpf", "mvvm", "plugin architecture"],
    description:
      "코그넥스 VPDL 개발에서 WPF 기반 대규모 UI, Migration Plugin, Easy UI Plugin, 사용자 로그 분석 기능을 개발했습니다. 레거시 구조와 신규 플랫폼 사이의 전환 부담을 줄이는 작업을 주도적으로 수행했습니다.",
  },
  {
    title: "React 기반 서비스와 프로토타입 구현",
    meta: "기획부터 사용자 흐름·상태·검증까지",
    tags: ["react", "service flow", "functional prototype"],
    description:
      "Moment ON과 Moment Play에서는 계정, 저장, 콘텐츠와 게임 흐름을 서비스 형태로 구현했습니다. Local Job Match, CoachHub, Classory와 Code Bridge에서는 서로 다른 역할의 사용자 흐름을 기능형 프로토타입으로 완성하고 영상으로 공개했습니다.",
  },
  {
    title: "운영과 확장을 고려한 구현",
    meta: "데이터 저장 · 배포 · 유지보수 구조",
    tags: ["deployment", "data flow", "maintainability"],
    description:
      "기능이 화면에서 끝나지 않도록 데이터 흐름, 저장 구조, 검증과 배포 방식을 함께 설계합니다. 구현 완료 범위와 실제 결제·운영 DB처럼 연결하지 않은 범위를 명확히 구분합니다.",
  },
];

export const resumeHighlights = [
  "AI 플랫폼 UI/UX 전면 리뉴얼을 주도해 사용자 워크플로우 기반 구조로 재설계",
  "UI 관련 고객 문의 20% 이상 감소에 기여",
  "Migration Plugin 개발로 기존 SuaKit 프로젝트의 VPDL 전환 자동화",
  "Easy UI Plugin, 사용자 활동 로그 추적, Excel 리포트 기능 개발",
  "TeamCity, AWS EC2, InstallShield 기반 테스트·배포 환경 개선",
  "Moment ON의 콘텐츠·계정·결과 저장·리포트 흐름 구현",
  "Moment Play의 14종 미니게임·랭킹·친구·초대 흐름 구현",
  "Local Job Match에서 모바일 구직자·고용주와 관리자 웹 흐름 설계",
  "CoachHub에서 목표·실행·피드백·성과로 이어지는 기업 코칭 운영 흐름 설계",
  "Classory에서 원장·강사·학부모·학생별 학원 운영 화면 설계",
  "Code Bridge에서 블록·JavaScript 코드·실행 결과를 연결한 학습 흐름 구현",
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

export const resumeSkills = [
  {
    title: "Frontend & Platform",
    items: ["C#", "WPF(MVVM)", "WinForms", "React", "TypeScript", "JavaScript", "React Native", "Expo", "HTML5", "CSS3"],
  },
  {
    title: "State & Interaction",
    items: ["UI Architecture", "Plugin Architecture", "Workflow Design", "Migration", "React Router", "Zustand", "dnd-kit", "Konva"],
  },
  {
    title: "Data & Backend",
    items: ["Python", "FastAPI", ".NET Framework", "ASP.NET", "REST API", "JSON", "Supabase", "PostgreSQL", "MSSQL", "LocalStorage"],
  },
  {
    title: "Quality & Delivery",
    items: ["Vitest", "React Testing Library", "Playwright", "ESLint", "Vite", "npm workspaces", "pnpm monorepo", "GitHub Actions", "GitHub Pages", "Capacitor", "TeamCity", "AWS EC2", "Git", "Figma", "Jira"],
  },
];

export const careerCards: ResumeCard[] = [
  {
    title: "코그넥스(구 수아랩)",
    period: "2019.08 ~ 2024.06",
    meta: "Front-end Engineer · AI 머신비전 플랫폼 VPDL",
    tags: ["WPF", "MVVM", "AI Platform", "Migration", "DevOps"],
    description:
      "VPDL AI 머신비전 플랫폼의 Front-end 개발을 담당하며 제품 UI 구조, 사용자 흐름, 운영 안정성을 함께 개선했습니다.",
    points: [
      "WPF(MVVM) 기반 대규모 애플리케이션 화면 개발과 복잡한 상태·인터랙션 처리",
      "VIDI-SuaKit-VPDL 통합 대응 및 플랫폼 간 UI 일관성 개선",
      "SuaKit 프로젝트를 VPDL에서 사용할 수 있도록 Migration Plugin 설계·개발",
      "사용자 워크플로우 기반 UI/UX 전면 리뉴얼로 UI 관련 고객 문의 20% 이상 감소에 기여",
      "Easy UI Plugin 개발로 초보 사용자의 진입 장벽 완화",
      "사용자 활동 로그 추적과 Excel 리포트 기능으로 QA·CS 원인 분석 흐름 개선",
      "TeamCity CI/CD, AWS EC2 테스트 환경, InstallShield·NSIS 설치 패키지 자동화 경험",
    ],
  },
  {
    title: "아티프렌즈",
    period: "2025.04 ~ 2025.10",
    meta: "Technical Content Creator",
    tags: ["blockchain", "technical writing", "content"],
    description:
      "블록체인 기술을 초보자가 이해할 수 있는 콘텐츠와 문서로 정리했습니다.",
    points: [
      "블록체인 기술 콘텐츠 제작과 기술 문서 작성·검수",
      "기술 개념을 입문자 관점의 설명 구조로 재정리",
      "기술 입문 도서 집필 참여",
    ],
  },
  {
    title: "퓨전데이타",
    period: "2018.11 ~ 2019.07",
    meta: "Software Engineer",
    tags: ["enterprise", "admin ui", "active directory"],
    description:
      "Active Directory 관리 솔루션과 관리자 UI 개발을 수행했습니다.",
    points: [
      "DevExpress 기반 관리자 화면 개발",
      "계정·조직 관리 흐름을 고려한 기업용 UI 구현",
      "운영자가 반복적으로 사용하는 기능의 사용성과 안정성 개선",
    ],
  },
  {
    title: "핸디에이치아이에스 / 핑거",
    period: "2016.04 ~ 2018.11",
    meta: "Software Engineer",
    tags: ["finance", "document security", "data integration"],
    description:
      "금융기관 데이터 연동, 계좌통합 서비스, 문서 보안 솔루션과 파일 변환 시스템 개발을 경험했습니다.",
    points: [
      "금융기관 데이터 연동과 계좌통합 서비스 개발",
      "문서 보안 솔루션 개발 및 파일 변환 시스템 구현",
      "기업용 솔루션 환경에서 안정성과 예외 처리를 고려한 개발 경험",
    ],
  },
];

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
    points: project.points.slice(0, 4),
    links: links.length > 0 ? links : undefined,
    repositoryNote: project.repositoryNote,
    image: project.image,
    imageAlt: project.imageAlt,
    youtubeId: project.youtubeId,
    previewLabel: project.previewLabel,
  };
});
