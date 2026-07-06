export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  points: string[];
  demo?: string;
  github?: string;
  image?: string;
  imageAlt?: string;
  previewLabel?: string;
};

export const projects: Project[] = [
  {
    id: "eun-contents",
    category: "Content Platform",
    title: "Eun Contents",
    description:
      "심리 테스트, 관계 분석, 미니게임, 운세형 콘텐츠를 하나의 허브에서 제공하는 React 기반 개인 콘텐츠 플랫폼입니다." +
      "\n\nRelationship Analyzer는 독립 프로젝트가 아니라 Eun Contents 안에서 제공되는 핵심 콘텐츠로 통합하고, 결과 리포트·저장·공유·결제 확장을 고려해 서비스 구조를 정리하고 있습니다.",
    stack: ["React", "TypeScript", "Supabase", "Content Hub", "Mobile UI"],
    points: [
      "관계 분석 시스템, 문답형 테스트, 운세형 콘텐츠, 미니게임 목록으로 이어지는 콘텐츠 진입 구조를 설계했습니다.",
      "Relationship Analyzer의 질문 플로우, 점수 계산, 결과 리포트, 이미지 저장·공유 흐름을 Eun Contents의 대표 콘텐츠로 통합하고 있습니다.",
      "로딩 화면, 결과 모달, 글래스모피즘 카드, 모바일 반응형 레이아웃 등 공통 UI 시스템을 정리했습니다.",
      "향후 결제, 결과 저장, 랭킹, 초대 링크 기능을 붙일 수 있도록 데이터와 화면 책임을 분리하고 있습니다.",
    ],
    demo: "https://coffee-and.github.io/relationship-analyzer/",
    github: "https://github.com/coffee-and/eun-contents",
    previewLabel: "Screenshot placeholder · public/projects/eun-contents.png",
  },
  {
    id: "omok-play",
    category: "Game Service",
    title: "Omok Play",
    description:
      "온라인 오목을 독립 서비스로 개발하고 있으며, 모바일 반응형 웹 대전 경험과 향후 앱 전환까지 고려해 구조를 잡고 있습니다." +
      "\n\nEun Contents의 게임 목록에서도 진입할 수 있도록 연동 예정입니다.",
    stack: ["React", "TypeScript", "Realtime Game", "Responsive UI", "PWA Planning"],
    points: [
      "게임 방식 선택, 이번 판 설정, 대국 화면으로 이어지는 사용자 진입 흐름을 설계했습니다.",
      "초대 링크 기반 실시간 웹 대전, PWA, Capacitor 앱 전환을 고려한 단계형 개발 방향을 잡았습니다.",
      "게임 서비스처럼 보이도록 우주 배경, 글래스 UI, 모바일 중심 레이아웃을 다듬고 있습니다.",
    ],
    github: "https://github.com/coffee-and/omok-play",
    previewLabel: "Screenshot placeholder · public/projects/omok-play.png",
  },
  {
    id: "news-monitor",
    category: "Personal Project",
    title: "News Monitor",
    description:
      "Guardian API를 활용해 AI 및 기술 트렌드를 키워드와 카테고리별로 탐색하고 " +
      "관심 기사를 북마크하거나 최근 본 기사로 다시 확인할 수 있는 뉴스 모니터링 웹앱입니다." +
      "\n\nAPI 요청과 사용자 상태를 분리하고 LocalStorage를 활용해 데이터가 유지되도록 구현했습니다.",
    stack: ["React", "TypeScript", "Vite", "Guardian API", "LocalStorage"],
    points: [
      "Guardian API를 연동해 키워드 기반 뉴스 검색 기능을 구현했습니다.",
      "검색, 카테고리 필터, 북마크, 최근 본 기사 기능을 구성했습니다.",
      "API 요청과 사용자 상태 로직을 Custom Hook으로 분리했습니다.",
      "LocalStorage를 활용해 사용자 데이터를 브라우저에 유지했습니다.",
    ],
    demo: "https://coffee-and.github.io/news-monitor/",
    github: "https://github.com/coffee-and/news-monitor",
    image: `${import.meta.env.BASE_URL}projects/news-monitor.png`,
    imageAlt: "News Monitor 서비스 화면",
  },
  {
    id: "code-bridge",
    category: "Learning Tool",
    title: "Code Bridge",
    description:
      "도형을 쌓고 움직이며 JavaScript 코드 개념을 시각적으로 익히는 초보자용 비주얼 코딩 학습 도구입니다." +
      "\n\n현재 프로젝트 데이터에 미리 추가해두었고, 스크린샷과 배포 링크는 완성 후 교체하면 됩니다.",
    stack: ["React", "TypeScript", "Zustand", "dnd-kit", "Konva"],
    points: [
      "이동, 회전, 반복 블록을 조합해 도형을 제어하는 학습 흐름을 설계했습니다.",
      "도형 생성·선택·삭제, 실행·스텝 실행·초기화 같은 기본 인터랙션 구조를 분리했습니다.",
      "블록 조작 결과를 코드 개념과 연결해 초보자가 흐름을 이해할 수 있는 UI를 목표로 하고 있습니다.",
    ],
    github: "https://github.com/coffee-and/code-bridge",
    previewLabel: "Screenshot placeholder · public/projects/code-bridge.png",
  },
];
