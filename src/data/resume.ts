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
};

export const resumeProfile = {
  name: "Eun Jeongan",
  role: "Frontend Engineer / Product UI Developer",
  summary:
    "WPF 기반 대규모 애플리케이션 개발 경험을 바탕으로, 사용자 흐름과 제품 구조를 함께 설계하는 프론트엔드 개발자입니다. 최근에는 React 기반 개인 서비스를 직접 기획·개발·배포하며 제품화 경험을 확장하고 있습니다.",
  keywords: ["8+ Years", "WPF / MVVM", "React", "Product UI", "Design System"],
};

export const resumeHighlights = [
  "AI 머신비전 플랫폼의 복잡한 워크플로우를 사용자 중심 UI로 재구성한 경험",
  "WPF, MVVM, React 기반 화면 구조 설계와 상태 로직 분리 경험",
  "개인 프로젝트에서 기획, UI 설계, 기능 구현, 배포, 유지보수까지 직접 진행",
];

export const resumeSkills = [
  {
    title: "Frontend",
    items: ["C#", "WPF", "MVVM", "WinForms", "React", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Product UI",
    items: ["UI Architecture", "Design System", "Workflow Design", "Responsive Web", "Accessibility"],
  },
  {
    title: "Data & Platform",
    items: ["REST API", "JSON", "Supabase", "PostgreSQL", "LocalStorage", "GitHub Pages"],
  },
  {
    title: "Build & Collaboration",
    items: ["Git", "Vite", "TeamCity", "AWS EC2", "InstallShield", "NSIS", "Figma"],
  },
];

export const resumeProjects: ResumeProject[] = [
  {
    id: "omok-play",
    title: "Omok Play",
    status: "In Progress",
    summary:
      "온라인 오목을 독립 프로젝트로 개발하면서, 은 컨텐츠에서도 진입할 수 있는 모바일 반응형 게임 웹앱으로 확장하고 있습니다.",
    stack: ["React", "TypeScript", "Realtime Game", "Responsive UI", "PWA Planning"],
    points: [
      "게임 방식 선택, 이번 판 설정, 대국 화면 등 사용자의 진입 흐름을 기준으로 화면 구조를 다듬고 있습니다.",
      "초대 링크 기반 실시간 웹 대전, PWA, Capacitor 앱 전환까지 고려한 단계형 개발 방향을 잡았습니다.",
      "게임 회사에서 만든 앱처럼 보이도록 글래스모피즘, 우주 배경, 모바일 중심 UI를 계속 개선하고 있습니다.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/coffee-and/omok-play",
      },
    ],
  },
  {
    id: "relationship-analyzer",
    title: "Relationship Analyzer",
    status: "Released / Improving",
    summary:
      "질문 기반 진단으로 관계의 감정 상태, 안정성, 갈등 패턴, 미래 방향성을 분석하는 React 기반 관계 분석 웹서비스입니다.",
    stack: ["React", "Vite", "JavaScript", "Supabase", "html2canvas", "GitHub Pages"],
    points: [
      "선택값을 기반으로 점수, 리스크, 카테고리별 상태, 갈등 유형을 계산하는 분석 로직을 분리했습니다.",
      "무료 결과와 프리미엄 리포트 구조를 나누고, 결과 카드 저장·공유 흐름을 구현했습니다.",
      "Together Questions, 초대 기반 답변 흐름, Supabase 저장 구조까지 확장하며 서비스형 구조로 고도화하고 있습니다.",
    ],
    links: [
      {
        label: "View Site",
        href: "https://coffee-and.github.io/relationship-analyzer/",
      },
      {
        label: "GitHub",
        href: "https://github.com/coffee-and/relationship-analyzer",
      },
    ],
  },
  {
    id: "eun-contents",
    title: "Eun Contents",
    status: "In Progress",
    summary:
      "심리 테스트, 미니게임, 운세형 콘텐츠를 하나의 허브에서 제공하는 개인 콘텐츠 플랫폼으로 개발 중입니다.",
    stack: ["React", "TypeScript", "Supabase", "Content Hub", "Mobile UI"],
    points: [
      "관계 분석, 문답형 콘텐츠, 오목 및 미니게임으로 이어지는 콘텐츠 진입 구조를 설계하고 있습니다.",
      "모바일 사용성을 기준으로 카드형 목록, CTA, 로딩 화면, 글래스 UI 톤을 정리하고 있습니다.",
      "향후 결제, 결과 저장, 랭킹, 초대 링크 같은 서비스 기능을 붙일 수 있도록 기반 구조를 분리하고 있습니다.",
    ],
  },
  {
    id: "news-monitor",
    title: "News Monitor",
    status: "Released",
    summary:
      "Guardian API를 활용해 AI 및 기술 트렌드를 키워드와 카테고리별로 탐색하는 뉴스 모니터링 웹앱입니다.",
    stack: ["React", "TypeScript", "Vite", "Guardian API", "LocalStorage"],
    points: [
      "검색, 카테고리 필터, 북마크, 최근 본 기사 기능을 구성했습니다.",
      "API 요청과 사용자 상태 로직을 Custom Hook으로 분리했습니다.",
      "LocalStorage를 활용해 사용자 데이터가 브라우저에 유지되도록 구현했습니다.",
    ],
    links: [
      {
        label: "View Site",
        href: "https://coffee-and.github.io/news-monitor/",
      },
      {
        label: "GitHub",
        href: "https://github.com/coffee-and/news-monitor",
      },
    ],
  },
];
