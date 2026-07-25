export type AskEunCategoryId =
  | "positioning"
  | "career"
  | "full-stack"
  | "projects"
  | "work-style";

export type AskEunCategory = {
  id: AskEunCategoryId;
  label: string;
  description: string;
};

export type AskEunLink = {
  label: string;
  href: string;
};

export type AskEunItem = {
  id: string;
  category: AskEunCategoryId;
  question: string;
  summary: string;
  answer: string[];
  relatedLinks?: AskEunLink[];
};

export const askEunCategories: AskEunCategory[] = [
  {
    id: "positioning",
    label: "About & Positioning",
    description: "개발자로서의 방향과 강점을 소개합니다.",
  },
  {
    id: "career",
    label: "Career",
    description: "회사별 역할과 대표적인 문제 해결 경험을 설명합니다.",
  },
  {
    id: "full-stack",
    label: "Full-stack & Architecture",
    description: "화면, 인증, 데이터, 검증과 배포를 어떻게 연결하는지 설명합니다.",
  },
  {
    id: "projects",
    label: "Projects",
    description: "최근 서비스와 기능형 프로토타입의 구현 범위를 소개합니다.",
  },
  {
    id: "work-style",
    label: "Work Style",
    description: "협업, 기술 선택과 AI 활용 방식을 설명합니다.",
  },
];

export const askEunItems: AskEunItem[] = [
  {
    id: "profile",
    category: "positioning",
    question: "은정안은 어떤 개발자인가요?",
    summary: "제품의 사용성과 기술 구조를 함께 설계하는 제품 중심 풀스택 개발자입니다.",
    answer: [
      "8년 이상의 개발 경력 동안 금융 서비스, 기업용 솔루션과 AI 머신비전 플랫폼에서 제품 UI, 데이터 연동과 운영 환경을 개발했습니다.",
      "화면을 구현하는 데서 끝내지 않고 사용하기 편한 기능 구성, 상태와 데이터 처리 구조, 실패 조건, 테스트와 배포까지 함께 설계합니다.",
      "WPF·MVVM 기반 대규모 제품 경험을 React·TypeScript·Supabase 서비스로 확장했으며, Moment ON과 Moment Play에서는 화면부터 인증·저장·검증·배포까지 직접 구현했습니다.",
    ],
    relatedLinks: [
      { label: "회사 경력 보기", href: "#career" },
      { label: "대표 프로젝트 보기", href: "#projects" },
    ],
  },
  {
    id: "strength",
    category: "positioning",
    question: "가장 큰 강점은 무엇인가요?",
    summary: "요구사항을 그대로 옮기기보다 실제 사용 문제와 기술적 원인을 함께 찾습니다.",
    answer: [
      "새로운 기능을 요청받으면 먼저 누가 어떤 작업을 하는지, 어느 단계에서 혼란이나 반복이 생기는지 확인합니다.",
      "코그넥스에서는 반복되는 UI 문의를 개별 화면의 문제가 아니라 제품 구조와 기능 배치의 문제로 정의했습니다. 주요 작업 단계를 다시 구성하고 공통 UI 체계를 정비해 UI 관련 고객 문의를 20% 이상 줄이는 데 기여했습니다.",
      "개인 프로젝트에서도 같은 기준을 적용합니다. 기능을 추가하는 것뿐 아니라 데이터가 어떻게 저장되고 다시 열리는지, 실패했을 때 어떻게 복구하는지, 배포 후에도 검증 가능한지를 함께 확인합니다.",
    ],
  },
  {
    id: "product-fullstack",
    category: "positioning",
    question: "왜 제품 중심 풀스택 개발자라고 소개하나요?",
    summary: "프론트엔드 전문성을 기반으로 제품을 실제로 운영하는 데 필요한 영역까지 직접 연결했기 때문입니다.",
    answer: [
      "가장 깊은 전문 영역은 C#·WPF·MVVM 기반의 제품 UI 개발입니다. 복잡한 상태, 사용자 조작과 대규모 화면 구조를 오랫동안 다뤘습니다.",
      "이후 React 서비스에서는 인증, 사용자별 데이터 저장, 데이터 검증, 관리자 기능, 테스트, CI와 배포까지 직접 구현했습니다.",
      "모든 백엔드 영역을 동일한 깊이로 다룬다고 과장하지 않습니다. 다만 제품에 필요한 화면, API·데이터 연결과 운영 기반을 스스로 설계하고 완성할 수 있다는 의미에서 제품 중심 풀스택 개발자로 소개합니다.",
    ],
  },
  {
    id: "career-overview",
    category: "career",
    question: "전체 경력을 회사별로 소개해주세요.",
    summary: "금융·문서 보안, 기업용 관리 도구, AI 머신비전 제품과 기술 콘텐츠를 경험했습니다.",
    answer: [
      "핸디에이치아이에스와 핑거에서는 금융기관 데이터 연동, 계좌통합 서비스, 문서 보안과 파일 변환 시스템을 개발했습니다.",
      "퓨전데이타에서는 Active Directory 관리 솔루션과 DevExpress 기반 관리자 화면을 개발했습니다.",
      "코그넥스(구 수아랩)에서는 약 5년 동안 AI 머신비전 플랫폼 VPDL의 프론트엔드를 담당하며 UI/UX 리뉴얼, 플랫폼 통합, Migration·Easy UI Plugin, 로그·리포트와 배포 환경을 개발했습니다.",
      "아티프렌즈에서는 블록체인 기술 콘텐츠와 문서를 입문자가 이해할 수 있는 설명 순서로 정리하고 기술 입문 도서 집필에 참여했습니다.",
    ],
    relatedLinks: [{ label: "회사별 상세 경력", href: "#career" }],
  },
  {
    id: "cognex",
    category: "career",
    question: "코그넥스에서는 무엇을 담당했나요?",
    summary: "VPDL 제품 UI부터 플랫폼 통합, 전환 도구와 배포 환경까지 폭넓게 담당했습니다.",
    answer: [
      "WPF·MVVM 기반 AI 머신비전 플랫폼 VPDL의 화면과 상태를 개발했습니다.",
      "VIDI·SuaKit·VPDL의 서로 다른 화면과 기능을 하나의 제품으로 통합하고, 공통 ResourceDictionary·Style·ControlTemplate을 이용한 디자인 체계를 구축했습니다.",
      "SuaKit 프로젝트를 VPDL 형식으로 바꾸는 Migration Plugin, 초보 사용자를 위한 Easy UI Plugin, 사용자 작업 기록과 Excel 리포트를 구현했습니다.",
      "TeamCity CI/CD, AWS EC2 테스트 환경, InstallShield·NSIS 설치 패키지와 도움말 파일의 독립 배포 구조도 개선했습니다.",
    ],
    relatedLinks: [{ label: "코그넥스 상세 보기", href: "#career-cognex" }],
  },
  {
    id: "ui-renewal",
    category: "career",
    question: "UI/UX 리뉴얼로 어떤 문제를 해결했나요?",
    summary: "제품 통합 과정에서 생긴 화면 불일치와 기능 탐색의 어려움을 구조적으로 개선했습니다.",
    answer: [
      "VIDI와 SuaKit 기능이 빠르게 VPDL로 통합되면서 색상, 여백, 버튼과 입력 컨트롤이 화면마다 달랐고 사용자가 필요한 기능을 찾기 어려웠습니다.",
      "고객 문의와 작업 패턴을 분석해 Train·Inference·Result 중심으로 주요 작업 단계를 재구성했습니다.",
      "공통 색상과 여백, 상태 표현을 ResourceDictionary로 분리하고 반복 컨트롤을 Style·ControlTemplate·Custom Control로 만들었습니다.",
      "기존 UI와 신규 UI를 전환할 수 있게 한 뒤 기능별 적용과 검증을 거쳐 정식 반영했고, UI 관련 고객 문의를 20% 이상 줄이는 데 기여했습니다.",
    ],
  },
  {
    id: "migration",
    category: "career",
    question: "Migration Plugin은 어떤 문제를 해결했나요?",
    summary: "기존 SuaKit 고객이 프로젝트를 다시 만들지 않고 VPDL로 전환할 수 있게 했습니다.",
    answer: [
      "기존 프로젝트 파일은 버전마다 구조가 달라 VPDL에서 바로 사용할 수 없었고 고객은 프로젝트를 처음부터 다시 구성해야 했습니다.",
      "버전별 파일 구조, 모델 정보, 이미지 경로와 학습 설정을 분석하고 버전 확인·파싱·변환 책임을 모듈로 분리했습니다.",
      "호환되지 않는 데이터와 예외 상황을 안전하게 처리해 고객의 재작업과 내부 기술지원 시간을 줄였습니다.",
    ],
  },
  {
    id: "early-career",
    category: "career",
    question: "금융·기업용 솔루션에서는 무엇을 경험했나요?",
    summary: "데이터 연동, 문서·파일 처리와 관리자 중심 제품을 개발했습니다.",
    answer: [
      "금융기관마다 다른 데이터 형식과 오류 조건을 처리하며 계좌통합 서비스를 개발했습니다.",
      "문서 보안과 파일 변환 시스템에서는 파일 호환성, 실패 대응과 기업 환경의 안정성을 경험했습니다.",
      "Active Directory 관리 솔루션에서는 계정과 조직 정보를 반복해서 조회·변경하는 운영자를 위한 DevExpress 기반 관리자 화면을 개발했습니다.",
    ],
  },
  {
    id: "backend-data",
    category: "full-stack",
    question: "백엔드와 데이터 영역에서는 무엇을 구현했나요?",
    summary: "API 연동 경험에 더해 Supabase 인증·데이터베이스·RLS와 저장 검증을 구현했습니다.",
    answer: [
      "실무에서는 .NET Framework·ASP.NET, REST API·JSON과 MSSQL·Oracle·MySQL을 이용한 기업 시스템 연동을 경험했습니다.",
      "Moment ON에서는 Supabase 이메일 인증, 프로필, 사용자별 결과·캘린더·다이어리 데이터와 소유자 전용 RLS를 구성했습니다.",
      "회원과 비회원이 같은 저장 인터페이스를 사용하도록 만들고, 비회원 기록 가져오기, 중복 방지, 런타임 검증과 실패 복구 데이터를 구현했습니다.",
      "Moment Play에서는 게임 결과·랭킹·친구 관계와 오목 초대 데이터를 Supabase 구조에 연결했습니다.",
    ],
  },
  {
    id: "guest-member-storage",
    category: "full-stack",
    question: "회원과 비회원 데이터는 어떻게 구분했나요?",
    summary: "동일한 기능을 유지하면서 저장 위치와 계정 소유 조건만 분리했습니다.",
    answer: [
      "비회원은 LocalStorage에 결과를 저장하고 회원은 Supabase의 사용자 소유 데이터로 저장합니다.",
      "화면이 저장 위치를 직접 알지 않도록 동일한 저장소 인터페이스 뒤에 로컬 구현과 서버 구현을 분리했습니다.",
      "로그인 후 비회원 기록을 계정으로 가져올 수 있으며, fingerprint를 사용해 중복 저장을 방지하고 잘못된 데이터는 읽는 시점에 제외합니다.",
      "서버 저장이 실패하면 원본 입력을 복구 영역에 유지하고 사용자가 다시 시도할 수 있게 했습니다.",
    ],
  },
  {
    id: "quality-delivery",
    category: "full-stack",
    question: "테스트와 배포는 어떻게 관리하나요?",
    summary: "정적 검사, 단위·컴포넌트·E2E 테스트와 실제 배포 확인을 단계별로 수행합니다.",
    answer: [
      "프로젝트 성격에 따라 ESLint, TypeScript 검사, Vitest와 React Testing Library를 사용합니다.",
      "Moment ON에서는 저장과 콘텐츠 결과 같은 핵심 기능을 Playwright E2E와 별도 검증 스크립트로 확인합니다.",
      "실무에서는 TeamCity와 AWS EC2 테스트 환경, InstallShield·NSIS 패키징을 경험했고 최근 웹 프로젝트는 GitHub Actions·Pages 또는 Vercel로 배포합니다.",
      "빌드 성공만 확인하지 않고 실제 배포 주소, 링크와 주요 화면도 다시 확인합니다.",
    ],
  },
  {
    id: "moment-on",
    category: "projects",
    question: "Moment ON은 어떤 서비스인가요?",
    summary: "사주·타로·관계분석과 기록 기능을 계정·저장·리포트로 연결한 콘텐츠 플랫폼입니다.",
    answer: [
      "사주, 타로, 관계분석, 함께 질문, 다이어리와 캘린더를 하나의 콘텐츠 플랫폼으로 구성했습니다.",
      "회원 인증과 사용자별 저장, 비회원 LocalStorage, 기록 가져오기, 저장 결과 다시 보기와 My Page를 구현했습니다.",
      "사주 계산과 해석 콘텐츠를 분리하고 생성 당시 결과를 저장해 나중에 열어도 같은 내용이 보이도록 했습니다.",
      "PNG·PDF 내보내기, 관리자 콘텐츠 관리, 저장 검증과 복구까지 구현했으며 실제 유료 결제만 아직 연결하지 않았습니다.",
    ],
    relatedLinks: [
      { label: "Moment ON 보기", href: "https://moment-on.vercel.app/" },
      { label: "프로젝트 상세", href: "#projects" },
    ],
  },
  {
    id: "moment-play",
    category: "projects",
    question: "Moment Play는 어떤 서비스인가요?",
    summary: "14종 게임과 기록·랭킹·친구·초대를 하나의 게임 서비스로 구성했습니다.",
    answer: [
      "2048, Memory Sequence, Sudoku, Omok, Solitaire, LITS, SET 등 14종 게임을 구현했습니다.",
      "카테고리 탐색, 게임별 안내, 키보드와 터치 입력, 결과와 기록을 공통 서비스 안에서 제공합니다.",
      "회원가입과 온보딩, 게임별 랭킹, 친구 관계, 오목 초대와 알림, 테마와 오디오 설정을 구현했습니다.",
      "핵심 게임 서비스는 구현 완료 상태이며 실제 결제와 수익화 시스템은 아직 연결하지 않았습니다.",
    ],
    relatedLinks: [
      { label: "Moment Play 보기", href: "https://coffee-and.github.io/moment-play/" },
      { label: "GitHub", href: "https://github.com/coffee-and/moment-play" },
    ],
  },
  {
    id: "functional-prototypes",
    category: "projects",
    question: "기능형 프로토타입에서는 무엇을 보여주나요?",
    summary: "역할이 다른 사용자의 처음부터 끝까지의 작업 과정을 실제 화면으로 구현했습니다.",
    answer: [
      "Local Job Match에서는 구직자·고용주 모바일 앱과 운영 관리자 웹을 구성했습니다.",
      "CoachHub에서는 관리자·PM·코치·참여자의 목표 합의, 실행 기록, 피드백과 성과 확인 과정을 구현했습니다.",
      "Classory에서는 원장·관리자·강사·학부모·학생별 학원 운영 기능을 구성했고, Code Bridge에서는 블록·JavaScript 코드·도형 실행 결과를 연결했습니다.",
      "실제 운영 서버가 연결된 상용 서비스라고 과장하지 않고 Mock Data 기반 Functional Prototype으로 범위를 명확히 표시합니다.",
    ],
    relatedLinks: [{ label: "데모 영상 보기", href: "#videos" }],
  },
  {
    id: "development-videos",
    category: "projects",
    question: "개발 영상을 공개한 이유는 무엇인가요?",
    summary: "정적인 화면만으로 보이지 않는 역할 전환, 상태 변화와 실제 조작을 보여주기 위해서입니다.",
    answer: [
      "스크린샷은 화면 디자인을 보여주지만 사용자가 어떤 순서로 기능을 이용하는지 충분히 설명하기 어렵습니다.",
      "Local Job Match, CoachHub, Classory와 Code Bridge의 대표 작업을 직접 조작하며 데스크톱과 모바일 화면을 영상으로 기록했습니다.",
      "영상에서는 역할별 기능, 상태 변화와 주요 작업 순서를 한 번에 확인할 수 있습니다.",
    ],
    relatedLinks: [{ label: "YouTube 영상 4편", href: "#videos" }],
  },
  {
    id: "ai",
    category: "work-style",
    question: "AI를 개발에 어떻게 활용하나요?",
    summary: "설계와 검증을 돕는 협업 도구로 사용하되 최종 판단은 직접 수행합니다.",
    answer: [
      "신규 기능의 구조 검토, 코드 리뷰, 리팩터링 후보 탐색, 테스트 코드와 문서 작성에 AI를 활용합니다.",
      "UI 설계, 요구사항 누락 확인, 반복 코드 개선과 배포 오류 분석에도 사용합니다.",
      "생성된 결과를 그대로 채택하지 않고 기존 코드와 요구사항에 맞는지 검토하며, 실제 코드·테스트·배포 결과를 근거로 최종 판단합니다.",
    ],
  },
  {
    id: "collaboration",
    category: "work-style",
    question: "협업할 때 가장 중요하게 보는 것은 무엇인가요?",
    summary: "각자의 역할보다 같은 문제를 같은 기준으로 이해하는 것을 우선합니다.",
    answer: [
      "기획자, QA, 엔진 개발자와 제품 담당자가 같은 기능을 서로 다르게 이해하지 않도록 요구사항과 예외 조건을 구체적으로 정리합니다.",
      "UI/UX 리뉴얼과 플랫폼 통합에서는 사용자 관점, 제품 일정과 기술 구조를 함께 고려하며 적용 순서를 조율했습니다.",
      "Jira·Confluence·Teams·Git을 사용하고, 복잡한 내용은 문서와 다이어그램, 실제 화면 예시로 공유합니다.",
    ],
  },
  {
    id: "technology-choice",
    category: "work-style",
    question: "새로운 기술을 선택하는 기준은 무엇인가요?",
    summary: "유행보다 현재 문제와 기존 구조, 운영 부담에 맞는지를 먼저 봅니다.",
    answer: [
      "기능을 구현할 수 있는지뿐 아니라 팀과 프로젝트가 유지할 수 있는지, 테스트와 배포 방식이 명확한지를 확인합니다.",
      "기존 구조로 충분한 문제라면 새로운 라이브러리를 추가하지 않고, 상태나 책임이 복잡해질 때 필요한 도구만 선택합니다.",
      "개인 프로젝트에서도 실제 구현 범위와 프로토타입 범위를 구분하고, 연결하지 않은 서버·결제·권한 기능은 명확히 표시합니다.",
    ],
  },
  {
    id: "why-hire",
    category: "work-style",
    question: "왜 정안님을 채용해야 하나요?",
    summary: "제품 문제를 화면 수정에 한정하지 않고 구조와 운영까지 확장해 해결할 수 있습니다.",
    answer: [
      "금융·기업용 솔루션과 AI 머신비전 플랫폼에서 복잡한 제품을 개발하고 장기간 유지한 경험이 있습니다.",
      "제품의 사용성을 개선하면서 공통 UI, 데이터 변환, 로그·리포트, 테스트와 배포 환경까지 함께 개선해왔습니다.",
      "최근에는 React 서비스에서 인증과 데이터 저장, 검증과 배포까지 직접 구현해 프론트엔드 중심 경력을 제품 중심 풀스택 역량으로 확장했습니다.",
      "새로운 기술을 빠르게 적용하되 실제 동작과 검증 결과를 확인하고, 구현한 범위와 남은 범위를 솔직하게 설명합니다.",
    ],
  },
];
