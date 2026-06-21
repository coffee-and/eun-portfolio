export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  points: string[];
  demo: string;
  github: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "relationship-analyzer",
    category: "Personal Project",
    title: "Relationship Analyzer",
    description:
      "질문 기반 진단을 통해 관계의 감정 상태, 안정성, 갈등 패턴, 미래 방향성을 분석하고 " +
      "무료 결과와 프리미엄 리포트 형태로 제공하는 React 기반 관계 분석 웹서비스입니다." +
      "\n\n분석 로직 분리, 리포트형 UI 설계, 프리미엄 콘텐츠 구조, 결과 이미지 저장·공유, " +
      "GitHub Pages 배포까지 전체 서비스 흐름을 직접 구현했습니다.",
    stack: ["React", "Vite", "JavaScript", "html2canvas", "GitHub Pages"],
    points: [
      "질문 기반 관계 진단 플로우와 점수·위험도 계산 로직을 구현했습니다.",
      "감정 상태, 관계 안정성, 갈등 패턴, 미래 방향성 기준의 리포트 구조를 설계했습니다.",
      "무료 결과와 프리미엄 리포트 영역을 분리하고, 상세 분석·대화 가이드·7일 회복 가이드를 구성했습니다.",
      "결과 리포트 PNG 저장, Web Share API 공유, 클립보드 복사 대체 동작을 구현했습니다.",
      "GitHub Pages를 통해 실제 접근 가능한 서비스로 배포했습니다.",
    ],
    demo: "https://coffee-and.github.io/relationship-analyzer/",
    github: "https://github.com/coffee-and/relationship-analyzer",
    image: `${import.meta.env.BASE_URL}projects/relationship-analyzer.png`,
    imageAlt: "Relationship Analyzer 관계 리포트 서비스 화면",
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
];
