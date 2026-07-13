export type ProjectLinkType = "site" | "github" | "video";

export type ProjectLink = {
  label: string;
  href: string;
  type: ProjectLinkType;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  status: string;
  description: string;
  stack: string[];
  points: string[];
  links?: ProjectLink[];
  image?: string;
  imageAlt?: string;
  previewLabel?: string;
};

export const projects: Project[] = [
  {
    id: "moment-on",
    category: "Integrated Platform",
    title: "Moment ON",
    status: "Active Development",
    description:
      "사주, 타로, 관계 분석, 심리 테스트, 캘린더와 다이어리를 하나의 사용자 경험으로 연결한 자기이해·라이프 기록 플랫폼입니다." +
      "\n\n계산 엔진, 해석 콘텐츠, 결과 저장소와 UI 책임을 분리해 복잡한 도메인을 독립적으로 검증하고 확장할 수 있도록 설계했습니다.",
    stack: ["React", "TypeScript", "Vite", "Vitest", "Playwright", "Monorepo"],
    points: [
      "만세력 기반 사주 계산과 오행·십성·신살·대운 분석 구조를 독립 Core Package로 구성했습니다.",
      "관계 분석의 질문, 점수, 리스크와 유형 계산을 도메인 로직으로 분리했습니다.",
      "타로 선택·공개·정역방향 결과, 캘린더·다이어리와 결과 재열람 흐름을 통합했습니다.",
      "결과 Snapshot, Schema Validation, 중복 저장 방지와 기존 데이터 Migration 구조를 구현했습니다.",
    ],
    previewLabel: "Demo video ready · URL pending",
  },
  {
    id: "local-job-match",
    category: "Full-stack Platform",
    title: "Local Job Match",
    status: "MVP In Progress",
    description:
      "지역 기반으로 구직자와 구인자를 연결하는 크로스플랫폼 구인·구직 서비스입니다." +
      "\n\nReact Native 모바일 앱, React 관리자, NestJS API와 PostgreSQL을 하나의 Monorepo로 구성하고 역할별 업무 흐름과 데이터 구조를 함께 설계했습니다.",
    stack: ["React Native", "Expo", "React", "NestJS", "PostgreSQL", "pnpm"],
    points: [
      "전문직·경력직과 아르바이트 영역을 전환하는 듀얼 홈과 공고·지원·프로필 흐름을 설계했습니다.",
      "구직자·구인자·관리자 역할과 상태를 기준으로 화면, API와 데이터 모델을 구성했습니다.",
      "Shared Types, Zod Validation, API Client와 UI Token을 공통 Package로 분리했습니다.",
      "PostgreSQL 초기 Schema, Migration, API 계약과 ERD를 문서화했습니다.",
    ],
    previewLabel: "Demo video ready · URL pending",
  },
  {
    id: "coaching-project-platform",
    category: "B2B Operations",
    title: "Coaching Project Platform",
    status: "Active Development",
    description:
      "관리자, 코치와 참여자가 기업·기관 코칭 프로젝트의 목표와 진행 현황을 공유하고 피드백 과정을 운영하는 웹 플랫폼입니다." +
      "\n\n역할별 업무 영역과 프로젝트 중심 내비게이션을 기준으로 Dashboard, 목표, Tracking, Boosting과 그룹 코칭 화면을 연결했습니다.",
    stack: ["React 19", "TypeScript", "Vite", "React Router", "Responsive UI"],
    points: [
      "관리자·코치·참여자의 역할별 메뉴와 업무 흐름을 분리했습니다.",
      "Dashboard, 프로젝트 상세, 코칭 목표와 진행 Tracking을 연계하는 정보 구조를 설계했습니다.",
      "공통 App Layout, 반응형 Sidebar와 Mobile Menu를 구현했습니다.",
      "API와 데이터 계층을 단계적으로 연결할 수 있도록 Page Module과 Route 책임을 분리했습니다.",
    ],
    previewLabel: "Demo video ready · URL pending",
  },
  {
    id: "moment-play",
    category: "Game Platform",
    title: "Moment Play",
    status: "Active Development",
    description:
      "2048, 기억력 게임, 스도쿠, 카드 맞추기와 온라인 오목을 하나의 디자인 시스템과 공통 게임 흐름으로 제공하는 플랫폼입니다." +
      "\n\n게임별 상태와 UI 책임을 분리하고 온라인 오목의 방, 참여자, 준비 상태와 게임 진행 데이터를 실시간으로 동기화할 수 있도록 구성했습니다.",
    stack: ["React", "Supabase", "PostgreSQL", "React Router", "Vitest", "Vite"],
    points: [
      "게임별 독립 화면과 공통 Game Stage, 시작·정지·재시작·결과 Modal 구조를 구현했습니다.",
      "점수, 라운드와 진행 상태를 공통 UI 규칙으로 표시하도록 정리했습니다.",
      "온라인 오목의 방 생성·참여, 방장·참여자 역할과 준비 상태 구조를 설계했습니다.",
      "착수 데이터, 재대결과 퇴장 흐름을 Supabase 실시간 연동 구조로 구성했습니다.",
    ],
    previewLabel: "Demo video ready · URL pending",
  },
  {
    id: "code-bridge",
    category: "Learning Tool",
    title: "Code Bridge",
    status: "Functional Prototype",
    description:
      "초보자가 이동, 회전, 색상 변경과 반복 블록을 조합하고 실행 결과를 Canvas에서 확인하는 Drag & Drop 기반 비주얼 코딩 학습 도구입니다." +
      "\n\nUI와 실행 엔진을 분리하고 프로그램 블록을 실제 실행 단계로 변환하는 Interpreter를 구현했습니다.",
    stack: ["React", "TypeScript", "Zustand", "dnd-kit", "Konva", "Zod"],
    points: [
      "사각형·원·삼각형 생성과 선택·수정·삭제 기능을 구현했습니다.",
      "이동·회전·색상 변경·반복 블록과 전체 실행·Step 실행 흐름을 구성했습니다.",
      "Program, Shape와 Execution 상태를 독립 Zustand Store로 분리했습니다.",
      "Repeat Block을 실제 명령 순서로 변환하는 Interpreter와 실행 계획 Engine을 개발했습니다.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/coffee-and/code-bridge",
        type: "github",
      },
    ],
    previewLabel: "Screenshot coming soon · Code Bridge",
  },
  {
    id: "news-monitor",
    category: "News Service",
    title: "News Monitor",
    status: "Deployed",
    description:
      "Guardian API를 활용해 AI와 기술 트렌드를 키워드 및 카테고리별로 탐색하고 관심 기사를 저장하거나 최근 본 기사로 다시 확인하는 뉴스 모니터링 웹앱입니다." +
      "\n\nAPI 요청과 사용자 상태를 분리하고 LocalStorage Repository를 통해 북마크와 최근 기록이 유지되도록 구현했습니다.",
    stack: ["React", "TypeScript", "Vite", "Guardian API", "LocalStorage"],
    points: [
      "Guardian API를 연동해 키워드 검색과 카테고리 필터를 구현했습니다.",
      "북마크, 최근 본 기사와 조회·오류·빈 결과 상태를 구성했습니다.",
      "API 호출과 화면 상태 로직을 Custom Hook과 Component Layer로 분리했습니다.",
      "GitHub Pages 정적 빌드와 배포를 완료했습니다.",
    ],
    links: [
      {
        label: "View Site",
        href: "https://coffee-and.github.io/news-monitor/",
        type: "site",
      },
      {
        label: "GitHub",
        href: "https://github.com/coffee-and/news-monitor",
        type: "github",
      },
    ],
    image: `${import.meta.env.BASE_URL}projects/news-monitor.png`,
    imageAlt: "News Monitor 서비스 화면",
  },
];
