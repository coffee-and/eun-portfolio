export type SkillIcon = {
  name: string;
  label: string;
  icon?: string;
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
  status: string;
  summary: string;
  stack: string[];
  points: string[];
  links?: {
    label: string;
    href: string;
  }[];
  imageSlot: string;
};

export const resumeProfile = {
  name: "은정안",
  role: "Front-end Engineer / Product UI Developer",
  email: "annn@kakao.com",
  github: "https://github.com/coffee-and",
  summary:
    "8년 이상의 개발 경력을 바탕으로 복잡한 제품을 더 쉽게 쓰이게 만드는 프론트엔드 개발자입니다. WPF 기반 대규모 애플리케이션 개발, AI 머신비전 플랫폼 UI/UX 리뉴얼, Migration, 운영 환경 개선 경험을 바탕으로 제품 구조와 사용자 흐름을 함께 설계합니다. 최근에는 Eun Contents, Omok Play, Code Bridge, News Monitor를 통해 React 기반 서비스 기획과 구현 경험을 확장하고 있습니다.",
  keywords: ["8+ Years", "WPF / MVVM", "React", "Product UI", "Service Planning"],
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
    title: "React 기반 개인 서비스 제작",
    meta: "기획부터 배포까지 직접 진행",
    tags: ["react", "supabase", "github pages"],
    description:
      "Eun Contents, Omok Play, News Monitor, Code Bridge 같은 개인 프로젝트를 통해 기획, UI 설계, 상태 로직 분리, API 연동, 배포까지 직접 경험하며 웹 제품화 역량을 넓히고 있습니다.",
  },
  {
    title: "운영과 확장을 고려한 구현",
    meta: "데이터 저장 · 배포 · 유지보수 구조",
    tags: ["deployment", "data flow", "maintainability"],
    description:
      "기능이 화면에서 끝나지 않고 실제로 유지될 수 있도록 데이터 흐름, 저장 구조, 배포 방식, 추후 결제·랭킹·초대 링크 같은 확장 가능성까지 함께 고려해 구현합니다.",
  },
];

export const resumeHighlights = [
  "AI 플랫폼 UI/UX 전면 리뉴얼을 주도해 사용자 워크플로우 기반 구조로 재설계",
  "UI 관련 고객 문의 20% 이상 감소에 기여",
  "Migration Plugin 개발로 기존 SuaKit 프로젝트의 VPDL 전환 자동화",
  "Easy UI Plugin, 사용자 활동 로그 추적, Excel 리포트 기능 개발",
  "TeamCity, AWS EC2, InstallShield 기반 테스트·배포 환경 개선",
  "Eun Contents에서 관계 분석, 테스트, 운세형 콘텐츠, 미니게임 허브 구조 설계",
  "Omok Play, Code Bridge, News Monitor를 통해 게임·학습·뉴스 도메인의 React 프로젝트 확장",
];

export const skillIcons: SkillIcon[] = [
  { name: "C#", label: "C#", icon: `${import.meta.env.BASE_URL}icons/csharp.svg` },
  { name: "WPF", label: "WPF", icon: `${import.meta.env.BASE_URL}icons/wpf.svg` },
  { name: "React", label: "React", icon: `${import.meta.env.BASE_URL}icons/react.svg` },
  { name: "TypeScript", label: "TS", icon: `${import.meta.env.BASE_URL}icons/typescript.svg` },
  { name: "JavaScript", label: "JS", icon: `${import.meta.env.BASE_URL}icons/javascript.svg` },
  { name: "HTML5", label: "H5", icon: `${import.meta.env.BASE_URL}icons/html5.svg` },
  { name: "CSS3", label: "CSS", icon: `${import.meta.env.BASE_URL}icons/css3.svg` },
  { name: "Supabase", label: "SB", icon: `${import.meta.env.BASE_URL}icons/supabase.svg` },
  { name: "PostgreSQL", label: "PG", icon: `${import.meta.env.BASE_URL}icons/postgresql.svg` },
  { name: "Git", label: "Git", icon: `${import.meta.env.BASE_URL}icons/git.svg` },
  { name: "Figma", label: "Fg", icon: `${import.meta.env.BASE_URL}icons/figma.svg` },
  { name: "AWS EC2", label: "AWS", icon: `${import.meta.env.BASE_URL}icons/aws.svg` },
];

export const resumeSkills = [
  {
    title: "Frontend",
    items: ["C#", "WPF(MVVM)", "WinForms", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Architecture & Product",
    items: ["UI Architecture", "Plugin Architecture", "Workflow Design", "Design System", "Migration"],
  },
  {
    title: "Backend & Data",
    items: [".NET Framework", "ASP.NET", "REST API", "JSON", "Supabase", "PostgreSQL", "MSSQL"],
  },
  {
    title: "Build & Collaboration",
    items: ["Git", "Vite", "TeamCity", "AWS EC2", "InstallShield", "NSIS", "Figma", "Jira"],
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

export const resumeProjects: ResumeProject[] = [
  {
    id: "eun-contents",
    title: "Eun Contents",
    status: "Main Personal Service",
    summary:
      "심리 테스트, 관계 분석, 미니게임, 운세형 콘텐츠를 하나의 허브에서 제공하는 개인 콘텐츠 플랫폼입니다. Relationship Analyzer는 독립 항목으로 빼지 않고 Eun Contents 안의 대표 콘텐츠로 정리했습니다.",
    stack: ["React", "TypeScript", "Supabase", "Content Hub", "Mobile UI", "Glass UI"],
    points: [
      "관계 분석 시스템은 질문 기반 진단, 점수·리스크 계산, 카테고리별 결과, 결과 리포트, 이미지 저장·공유 흐름을 포함합니다.",
      "문답형 테스트, 심리·관계 콘텐츠, 운세형 콘텐츠, 미니게임 목록을 하나의 허브에서 탐색할 수 있도록 구조를 설계하고 있습니다.",
      "결제, 결과 저장, 랭킹, 초대 링크 등 서비스 기능을 추가할 수 있도록 데이터와 UI 책임을 분리하고 있습니다.",
      "로딩 화면, 결과 모달, 글래스 카드, 모바일 반응형 레이아웃을 공통 시스템처럼 정리하고 있습니다.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/coffee-and/eun-contents" },
    ],
    imageSlot: "public/resume/eun-contents.png",
  },
  {
    id: "omok-play",
    title: "Omok Play",
    status: "Standalone Game Service",
    summary:
      "온라인 오목을 별도 서비스로 개발하고 있으며, 초대 링크 기반 실시간 웹 대전, PWA, 앱 전환까지 고려한 모바일 반응형 게임 프로젝트입니다. Eun Contents의 게임 목록에서도 진입할 수 있도록 연동 예정입니다.",
    stack: ["React", "TypeScript", "Realtime Game", "Responsive UI", "PWA Planning"],
    points: [
      "게임 방식 선택, 이번 판 설정, 대국 화면으로 이어지는 진입 플로우를 설계하고 있습니다.",
      "유리감 있는 글래스 UI와 우주 배경을 활용해 일반 웹 화면보다 게임 앱에 가까운 몰입감을 목표로 하고 있습니다.",
      "초대 링크 기반 대전, 모바일 대응, 추후 앱 링크와 PWA 전환을 고려해 단계적으로 확장할 계획입니다.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/coffee-and/omok-play" },
    ],
    imageSlot: "public/resume/omok-play.png",
  },
  {
    id: "news-monitor",
    title: "News Monitor",
    status: "Released",
    summary:
      "Guardian API를 활용해 AI 및 기술 트렌드를 검색하고, 관심 기사를 북마크하거나 최근 본 기사로 다시 확인할 수 있는 뉴스 모니터링 웹앱입니다.",
    stack: ["React", "TypeScript", "Vite", "Guardian API", "LocalStorage"],
    points: [
      "키워드 검색, 카테고리 필터, 북마크, 최근 본 기사 기능을 구성했습니다.",
      "API 요청과 사용자 상태 로직을 Custom Hook으로 분리했습니다.",
      "LocalStorage를 활용해 사용자 데이터가 브라우저에 유지되도록 구현했습니다.",
    ],
    links: [
      { label: "View Site", href: "https://coffee-and.github.io/news-monitor/" },
      { label: "GitHub", href: "https://github.com/coffee-and/news-monitor" },
    ],
    imageSlot: "public/resume/news-monitor.png",
  },
  {
    id: "code-bridge",
    title: "Code Bridge",
    status: "In Progress / Data Ready",
    summary:
      "도형을 쌓고 움직이며 JavaScript 코드 개념을 시각적으로 익히는 초보자용 비주얼 코딩 학습 도구입니다. 완성 스크린샷과 배포 링크는 추후 교체할 수 있게 데이터 구조에 미리 포함했습니다.",
    stack: ["React", "TypeScript", "Zustand", "dnd-kit", "Konva", "Zod"],
    points: [
      "도형 생성·선택·삭제, 이동·회전·반복 블록, 실행·스텝 실행·초기화 흐름을 설계했습니다.",
      "블록 조작 결과를 코드 개념과 연결해 초보자가 프로그래밍 흐름을 시각적으로 이해하도록 구성하고 있습니다.",
      "추가 데이터는 src/data/resume.ts의 resumeProjects 배열과 src/data/projects.ts의 projects 배열에 같은 id로 확장하면 됩니다.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/coffee-and/code-bridge" },
    ],
    imageSlot: "public/resume/code-bridge.png",
  },
];
