export type ProjectStatus =
  | "core-complete"
  | "functional-prototype"
  | "released";

export type ProjectPresentation = "featured" | "video-demo" | "archive";

export type Project = {
  id: string;
  category: string;
  title: string;
  koreanTitle?: string;
  description: string;
  detailDescription?: string;
  purpose?: string;
  role?: string;
  users?: string[];
  stack: string[];
  cardHighlights: string[];
  points: string[];
  status: ProjectStatus;
  statusLabel: string;
  scopeLabel: string;
  scopeNote: string;
  presentation: ProjectPresentation;
  order: number;
  demo?: string;
  github?: string;
  repositoryNote?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  videoDescription?: string;
  image?: string;
  imageAlt?: string;
  previewLabel: string;
};

export const projects: Project[] = [
  {
    id: "moment-on",
    category: "Content & Self-reflection Platform",
    title: "Moment ON",
    description:
      "사주·타로·관계분석·함께 질문·다이어리·캘린더를 하나의 감성 콘텐츠 허브로 연결한 React·Supabase 기반 서비스입니다.",
    detailDescription:
      "여러 독립 콘텐츠를 하나의 시각 언어와 저장 경험으로 묶고, 게스트와 회원 모두 자신의 결과와 기록을 이어서 확인할 수 있도록 설계한 콘텐츠 플랫폼입니다.",
    purpose:
      "단일 심리 테스트나 운세 화면에 그치지 않고, 콘텐츠 탐색부터 결과 생성, 저장, 다시 보기와 내보내기까지 이어지는 실제 서비스를 구현했습니다.",
    role:
      "개인 프로젝트로 서비스 기획, 정보 구조, UI 설계, 프론트엔드 구현, 도메인 로직 분리, Supabase 연동, 결과 저장 구조, 테스트와 배포 설정을 진행했습니다.",
    users: [
      "비회원 사용자",
      "회원 사용자",
      "자기성찰 콘텐츠 사용자",
      "콘텐츠 관리자",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "npm workspaces",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "html2canvas",
      "jsPDF",
      "ESLint",
    ],
    cardHighlights: [
      "회원·비회원 결과 저장",
      "PNG·PDF 리포트",
      "검증·복구 가능한 저장 구조",
      "관리자 콘텐츠 관리",
    ],
    points: [
      "사주 계산, 타로, 관계분석, 함께 질문, 다이어리와 캘린더를 하나의 콘텐츠 구성으로 연결했습니다.",
      "Supabase 인증과 사용자별 결과 저장, 비회원 LocalStorage 저장, 비회원 기록 가져오기를 구현했습니다.",
      "저장 결과 다시 보기와 My Page, PNG 이미지와 PDF 리포트 내보내기를 구현했습니다.",
      "apps/web과 packages/core를 분리하고 UI에 종속되지 않는 도메인 계산 로직을 구성했습니다.",
      "계산 결과와 버전이 관리되는 해석 콘텐츠를 분리하고, 생성 당시 결과를 유지하도록 설계했습니다.",
      "저장 데이터 런타임 검증과 손상 데이터 제외, 저장 실패 복구와 재시도를 구현했습니다.",
      "관리자용 콘텐츠 관리 화면과 단위·E2E 테스트, 기능 검증 스크립트를 구성했습니다.",
    ],
    status: "core-complete",
    statusLabel: "핵심 서비스 구현 완료",
    scopeLabel: "사주 학습과 함께 개발 중",
    scopeNote:
      "사주를 직접 공부하며 해석 기준과 콘텐츠를 계속 다듬고 있으며, 서비스 완성도를 높이기 위한 개발을 이어가고 있습니다.",
    presentation: "featured",
    order: 1,
    demo: "https://moment-on.vercel.app/",
    repositoryNote: "Private Repository · Source available on request",
    previewLabel: "content · account · saved reports",
  },
  {
    id: "moment-play",
    category: "Game Service",
    title: "Moment Play",
    description:
      "2048, 메모리, 스도쿠, 오목을 포함한 14종 미니게임과 기록·랭킹·친구·초대 기능을 제공하는 React·Supabase 기반 게임 서비스입니다.",
    detailDescription:
      "각 게임을 별도 화면으로 나열하는 데 그치지 않고, 홈, 게임 탐색, 플레이, 결과 기록, 랭킹, 친구와 게임 초대를 하나의 게임 플랫폼으로 구성했습니다.",
    purpose:
      "여러 장르의 게임을 공통 탐색 경험 안에서 제공하고, 플레이 전후의 기록·관계·초대 기능까지 연결된 게임 서비스를 구현했습니다.",
    role:
      "개인 프로젝트로 서비스 기획, 게임 카탈로그 설계, 공통 레이아웃, 각 게임 UI와 로직, 사용 과정, Supabase 데이터 구조, 랭킹·친구·초대 기능과 테스트를 구현했습니다.",
    users: ["비회원 플레이어", "회원 플레이어", "친구와 게임하는 사용자"],
    stack: [
      "React",
      "JavaScript",
      "React Router",
      "Supabase",
      "Vite",
      "Vitest",
      "CSS",
    ],
    cardHighlights: [
      "14종 미니게임",
      "게임별 기록·랭킹",
      "친구·오목 초대·알림",
      "테마·오디오·반응형 입력",
    ],
    points: [
      "2048, Memory Sequence, Sudoku, Omok, Star Flight, Timing Tap, Glow Sequence를 구현했습니다.",
      "Solitaire, LITS, Shikaku, Minesweeper, SET, Mosaic, Block Blast까지 총 14종 게임을 구현했습니다.",
      "카테고리별 게임 탐색, 게임별 사용 방법, 키보드와 터치 입력, 결과와 기록 관리를 구성했습니다.",
      "게임별 랭킹과 회원가입·로그인·온보딩 과정을 구현했습니다.",
      "친구 목록과 관계 관리, 오목 게임 초대와 초대 알림을 Supabase 데이터 구조와 연결했습니다.",
      "라이트·다크 테마, 게임 오디오 설정과 반응형 게임 화면을 구현했습니다.",
    ],
    status: "core-complete",
    statusLabel: "핵심 서비스 구현 완료",
    scopeLabel: "모바일 앱 출시 준비 중",
    scopeNote:
      "현재 웹 서비스로 제공하고 있으며, 모바일 앱으로 출시하기 위한 준비를 진행하고 있습니다.",
    presentation: "featured",
    order: 2,
    demo: "https://coffee-and.github.io/moment-play/",
    github: "https://github.com/coffee-and/moment-play",
    previewLabel: "14 playable games · ranking · friends · invite",
  },
  {
    id: "local-job-match",
    category: "Recruiting Platform Prototype",
    title: "Local Job Match",
    koreanTitle: "로컬잡매치",
    description:
      "지역 기반 채용의 구직자, 고용주, 운영 관리자 과정을 모바일 앱과 관리자 웹으로 연결한 Mock Data 기반 프로젝트입니다.",
    purpose:
      "공고 탐색과 지원에 머무르지 않고, 고용주의 공고 등록과 지원자 검토, 운영 관리자의 현황 관리까지 이어지는 채용 서비스 전체 과정을 구현했습니다.",
    role:
      "구직자·고용주용 Expo 앱, 운영 관리자용 반응형 웹과 두 화면이 공유하는 Mock 도메인 구조를 설계하고 구현했습니다.",
    users: ["구직자", "고용주", "운영 관리자"],
    stack: [
      "Expo SDK 57",
      "React Native",
      "React",
      "Vite",
      "TypeScript",
      "pnpm monorepo",
      "GitHub Actions",
      "CSS",
    ],
    cardHighlights: [
      "구직자 공고 탐색·지원",
      "고용주 공고·지원자 관리",
      "운영 관리자 웹",
    ],
    points: [
      "구직자의 공고 탐색·검색·상세 조회·지원·지원 취소와 상태별 현황을 구현했습니다.",
      "고용주의 대시보드, 공고 작성·임시 저장·게시·수정·복제·마감과 지원자 상태 관리를 구성했습니다.",
      "운영 관리자의 사용자·공고·지원·매칭·로그 관리, 검색·필터와 데모 데이터 제어를 구현했습니다.",
      "apps/mobile, apps/admin, apps/api와 packages/demo-domain으로 역할을 나눈 pnpm 모노레포를 구성했습니다.",
    ],
    status: "functional-prototype",
    statusLabel: "Functional Prototype",
    scopeLabel: "Mock Data · YouTube 공개",
    scopeNote:
      "실제 인증, 운영 서버와 데이터베이스는 연결하지 않았습니다. 모바일 앱과 관리자 웹 사이의 실시간 동기화는 현재 범위에 포함되지 않습니다.",
    presentation: "video-demo",
    order: 3,
    repositoryNote: "Private Repository",
    youtubeUrl: "https://youtu.be/KdzZpGbRIEc",
    youtubeId: "KdzZpGbRIEc",
    videoDescription:
      "구직자의 공고 탐색·지원부터 고용주의 공고·지원자 관리, 운영 관리자 화면까지 연결한 크로스플랫폼 채용 프로토타입입니다.",
    previewLabel: "mobile applicant · employer · admin web",
  },
  {
    id: "coachhub",
    category: "Coaching Operations Prototype",
    title: "CoachHub",
    koreanTitle: "코치허브",
    description:
      "기업 코칭 프로젝트의 목표 합의, 주간 실행 기록, 코치 피드백, 그룹코칭, 자료와 성과 관리를 연결한 운영 프로토타입입니다.",
    purpose:
      "관리자, PM, 코치, 참여자의 진행 정보가 여러 문서와 도구에 흩어지는 문제를 줄이고, 코칭 프로젝트의 시작부터 성과 확인까지 하나의 서비스에서 관리하도록 구성했습니다.",
    role:
      "역할별 대시보드와 프로젝트 운영 정보 구조를 설계하고, 목표·실행·피드백·성과가 이어지는 반응형 화면을 구현했습니다.",
    users: ["관리자", "PM", "코치", "참여자"],
    stack: ["React 19", "TypeScript", "React Router", "Vite", "Lucide React", "CSS"],
    cardHighlights: [
      "목표 합의·주간 Tracking",
      "코치 피드백·그룹코칭",
      "성과 지표·CSV 내보내기",
    ],
    points: [
      "프로젝트 검색·필터·상세 관리와 4단계 코칭목표 합의서, 미리보기를 구현했습니다.",
      "주간 진행률, 실행 경험, 장애 요인, 다음 계획과 코치 피드백 기능을 연결했습니다.",
      "그룹코칭 출석·체크인·세션 상태·피드와 자료실을 구성했습니다.",
      "미작성 현황, 최근 피드백, 기간별 성과와 프로젝트 비교, CSV 내보내기를 구현했습니다.",
      "통합 검색, 알림 읽음 처리, 역할 미리보기와 데스크톱·태블릿·모바일 화면을 구성했습니다.",
    ],
    status: "functional-prototype",
    statusLabel: "Functional Prototype",
    scopeLabel: "Mock Data · YouTube 공개",
    scopeNote:
      "실제 인증, 서버와 데이터베이스 없이 예시 데이터로 전체 업무 과정을 확인합니다. 역할 전환은 화면 미리보기이며 실제 권한 보안 기능이 아닙니다.",
    presentation: "video-demo",
    order: 4,
    repositoryNote: "Private Repository",
    youtubeUrl: "https://youtu.be/i5ytN54c1AE",
    youtubeId: "i5ytN54c1AE",
    videoDescription:
      "기업 코칭 프로젝트의 목표 설정, 주간 Tracking, 코치 피드백, 그룹코칭, 자료와 성과 관리를 하나의 서비스로 연결한 운영 프로토타입입니다.",
    previewLabel: "goals · tracking · feedback · outcomes",
  },
  {
    id: "classory",
    category: "Academy Operations Prototype",
    title: "Classory",
    koreanTitle: "클래서리",
    description:
      "학생, 수업, 출결, 평가, 소통과 성장 기록을 역할별 화면으로 연결한 학원 운영 프로토타입입니다.",
    purpose:
      "학원 운영 정보가 출결표, 성적표, 공지와 상담 기록으로 흩어지는 문제를 줄이고, 원장·관리자·강사·학부모·학생이 각자 필요한 기능과 기록을 한 서비스에서 확인하도록 구성했습니다.",
    role:
      "학원 운영 정보 구조와 역할별 화면, 상태 변화를 설계하고 웹·Android WebView에서 확인 가능한 반응형 프로토타입을 구현했습니다.",
    users: ["원장", "관리자", "강사", "학부모", "학생"],
    stack: [
      "React 19",
      "TypeScript",
      "React Router",
      "Vite",
      "Capacitor",
      "Vitest",
      "CSS",
    ],
    cardHighlights: [
      "역할별 학원 운영 대시보드",
      "출결·평가·Growth Story",
      "공지·상담·QR 초대",
    ],
    points: [
      "역할별 대시보드와 학생·보호자·반·수업·시간표·정원·진도 관리를 구성했습니다.",
      "과제·피드백, 일별·월별 출결과 평가·점수·성적 추이를 연결했습니다.",
      "출결·성적·과제·피드백을 하나의 Growth Story로 확인하도록 구현했습니다.",
      "공지, Q&A, 일정 변경, 학부모 피드백, QR 초대와 가입 요청 검토를 구성했습니다.",
      "학원 전환, 알림, 라이트·다크 테마, 한·영 전환과 Capacitor Android 지원을 구현했습니다.",
    ],
    status: "functional-prototype",
    statusLabel: "Functional Prototype",
    scopeLabel: "Mock Data · YouTube 공개",
    scopeNote:
      "실제 인증과 운영 데이터베이스 없이 브라우저 또는 Android WebView의 Mock Data로 동작합니다. 구독 화면은 기능 미리보기이며 실제 결제를 포함하지 않습니다.",
    presentation: "video-demo",
    order: 5,
    repositoryNote: "Private Repository",
    youtubeUrl: "https://youtu.be/Eo_wazZJFYc",
    youtubeId: "Eo_wazZJFYc",
    videoDescription:
      "학생·수업·출결·평가·소통 데이터를 연결하고 원장, 강사, 학부모, 학생의 화면을 역할별로 구성한 학원 운영 프로토타입입니다.",
    previewLabel: "academy roles · attendance · growth story",
  },
  {
    id: "code-bridge",
    category: "Visual Coding Learning Tool",
    title: "Code Bridge",
    koreanTitle: "코드브릿지",
    description:
      "블록 명령, 생성된 JavaScript 코드와 도형의 실행 결과를 한 화면에서 연결해 학습하는 비주얼 코딩 도구입니다.",
    purpose:
      "블록을 조립하는 경험과 실제 코드 실행 과정 사이의 간격을 줄이고, 초보자가 각 명령의 결과를 눈으로 따라갈 수 있도록 만들었습니다.",
    role:
      "편집기 정보 구조, 블록·코드·캔버스의 상호작용과 실행 엔진을 분리해 설계하고 구현했습니다.",
    users: ["코딩 입문자", "블록과 JavaScript의 관계를 학습하는 사용자"],
    stack: [
      "React 19",
      "TypeScript",
      "Zustand",
      "dnd-kit",
      "Konva",
      "React Konva",
      "Vitest",
      "Vite",
    ],
    cardHighlights: [
      "블록·JavaScript·실행 결과 연결",
      "일시정지·한 단계 실행",
      "10단계 미션·Undo/Redo",
    ],
    points: [
      "도형 생성·편집과 드래그 앤 드롭 블록 프로그램 구성을 구현했습니다.",
      "이동·회전·색상·표시·반복·대기·조건·클릭 이벤트·변수 블록을 구성했습니다.",
      "실행·일시정지·이어서 실행·한 단계 실행·초기화와 속도 조절을 구현했습니다.",
      "실행 블록과 생성된 JavaScript 코드의 위치를 연결해 강조했습니다.",
      "실제 실행 결과를 검증하는 10단계 미션, 저장·불러오기와 Undo·Redo를 구현했습니다.",
      "편집 상태와 실행 상태, 화면 로직과 세부 실행 규칙을 분리했습니다.",
    ],
    status: "functional-prototype",
    statusLabel: "Functional Prototype",
    scopeLabel: "로컬 저장 · YouTube 공개",
    scopeNote:
      "서버와 계정 없이 브라우저에서 동작하며 프로젝트와 미션 기록이 로컬에 저장되는 기능형 프로토타입입니다.",
    presentation: "video-demo",
    order: 6,
    repositoryNote: "Private Repository",
    youtubeUrl: "https://youtu.be/pV1YFJQPUEg",
    youtubeId: "pV1YFJQPUEg",
    videoDescription:
      "블록을 조립하면 JavaScript 코드가 만들어지고, 실행 중인 블록·코드·도형의 변화를 함께 확인할 수 있는 비주얼 코딩 학습 프로토타입입니다.",
    previewLabel: "blocks · JavaScript · canvas execution",
  },
  {
    id: "news-monitor",
    category: "News Monitoring Web App",
    title: "News Monitor",
    description:
      "Guardian API를 활용해 AI와 기술 뉴스를 탐색하고 북마크와 최근 본 기사를 관리하는 React 웹앱입니다.",
    purpose:
      "외부 API의 로딩·오류·빈 결과 상태와 브라우저에 유지되는 개인화 데이터를 하나의 탐색 경험으로 구성했습니다.",
    role:
      "API 연동, 검색·필터 UI, 사용자 상태 저장과 정적 배포를 구현했습니다.",
    stack: ["React", "TypeScript", "Vite", "Guardian API", "LocalStorage"],
    cardHighlights: [
      "키워드 검색·카테고리 필터",
      "북마크·최근 본 기사",
      "LocalStorage 상태 유지",
    ],
    points: [
      "키워드 검색과 카테고리 필터를 구현했습니다.",
      "북마크와 최근 본 기사를 LocalStorage에 유지했습니다.",
      "API 요청과 사용자 상태를 Custom Hook으로 분리했습니다.",
    ],
    status: "released",
    statusLabel: "Released Project",
    scopeLabel: "Earlier Work",
    scopeNote:
      "외부 뉴스 API와 LocalStorage를 활용한 이전 작업으로, 최신 대표 프로젝트보다 낮은 우선순위로 소개합니다.",
    presentation: "archive",
    order: 7,
    demo: "https://coffee-and.github.io/news-monitor/",
    github: "https://github.com/coffee-and/news-monitor",
    image: `${import.meta.env.BASE_URL}projects/news-monitor.png`,
    imageAlt: "News Monitor 뉴스 검색·필터 화면",
    previewLabel: "search · filters · saved articles",
  },
];

export const getProjectsByPresentation = (
  presentation: ProjectPresentation,
) =>
  projects
    .filter((project) => project.presentation === presentation)
    .sort((left, right) => left.order - right.order);
