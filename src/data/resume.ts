import { careers } from "./careers";
import {
  projects,
  type ProjectPresentation,
} from "./projects";
import { skillGroups } from "./skills";
import { getCompanyDisplayName } from "../utils/companyNames";

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
    "8년 이상의 개발 경력 동안 금융 자산관리와 스크래핑, 은행 데이터 관리, 문서 뷰어와 파일 변환, Active Directory 관리자 솔루션, AI 머신비전 플랫폼을 개발했습니다. WPF·MVVM 기반 대규모 제품 UI와 C++ Native DLL 연동, 비동기 처리, 설치·배포 환경을 경험했고, 최근에는 React·TypeScript·Supabase로 화면 구성, 인증, 데이터 저장, 검증과 배포까지 직접 연결한 서비스를 만들고 있습니다.",
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
      "Cognex VPDL에서 Native 엔진 연동, UI/UX 리뉴얼, 제품 통합, Migration·Easy UI Plugin, 로그·분석 도구와 배포 환경을 개발했습니다.",
  },
  {
    title: "기업용·금융 제품 개발 경험",
    meta: "금융 데이터 · 문서 처리 · 관리자 솔루션",
    tags: ["enterprise", "finance", "system integration"],
    description:
      "FINGER Inc., Standard Chartered Bank Korea, HandyHIS와 FusionData에서 금융 데이터 연동, 문서 뷰어·파일 변환, AD 관리와 프로세스 모니터링 솔루션을 개발했습니다.",
  },
  {
    title: "React 기반 제품 서비스 구현",
    meta: "인증 · 저장 · 관리자 · 테스트",
    tags: ["react", "supabase", "product engineering"],
    description:
      "Moment ON과 Moment Play에서는 계정, 콘텐츠·게임, 사용자별 저장, 검증과 배포를 구현했습니다. 역할별 프로젝트 네 편은 Functional Prototype과 영상으로 공개했습니다.",
  },
];

export const resumeHighlights = [
  "딥러닝 머신비전 엔진(C++ Native DLL)과 WPF UI 연동 구조 설계",
  "AI 플랫폼 UI/UX 전면 리뉴얼과 공통 디자인 체계 구축",
  "UI 관련 고객 문의 20% 이상 감소에 기여",
  "SuaKit 프로젝트의 VPDL 전환을 자동화한 Migration Plugin 개발",
  "Quick HDM GUI·HDM Red 가이드·Easy UI Plugin 개발",
  "딥러닝 파라미터 복원, 작업 기록·Excel 리포트와 워크스페이스 분석 도구 구현",
  "TeamCity·AWS EC2·InstallShield·NSIS 기반 검증·설치·배포 환경 운영",
  "ADAgent·ProcessWatchdog와 NSIS 통합 설치 프로그램 개발·유지보수",
  "PDF 보안 뷰어와 Office·압축파일 이미지 변환 시스템 개발",
  "Standard Chartered Bank Korea 여신 거래 데이터와 Excel·Oracle 업무 도구 관리",
  "신한은행 머니멘토·국민은행 가계부·myFingerCM 자산관리 솔루션 개발",
  "은행·카드·통신사·증권사·공공기관 스크래핑 스크립트 개발·유지보수",
  "블록체인 입문 도서 집필과 아키텍처 다이어그램·개념 시각화 제작",
  "Moment ON·Moment Play 핵심 서비스와 프로젝트 데모 영상 4편 공개",
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
  title: getCompanyDisplayName(career),
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
