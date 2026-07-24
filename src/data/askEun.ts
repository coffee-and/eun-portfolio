export type AskEunItem = {
  id: string;
  question: string;
  tags: string[];
  answer: string[];
};

export const askEunItems: AskEunItem[] = [
  {
    id: "profile",
    question: "은정안은 어떤 개발자인가요?",
    tags: ["8+ Years", "Frontend", "Product Thinking"],
    answer: [
      `8년 이상의 개발 경력 동안 금융 서비스, 기업용 솔루션과 AI 머신비전 플랫폼에서 제품 UI와 시스템 개선을 담당했습니다.`,
      `기능이 있는 화면을 만드는 데서 끝내지 않고 사용자가 실제로 이동하는 순서, 역할별 상태 변화, 데이터 저장과 운영 흐름을 함께 구조화합니다.`,
      `WPF에서 쌓은 대규모 UI 경험을 React 서비스와 크로스플랫폼 프로젝트로 확장했습니다. Moment ON과 Moment Play의 핵심 서비스 흐름을 구현했고, 네 개의 기능형 프로토타입을 YouTube 데모로 공개했습니다.`,
    ],
  },
  {
    id: "strength",
    question: "가장 강한 프론트엔드 경험은 무엇인가요?",
    tags: ["WPF", "MVVM", "UI Architecture"],
    answer: [
      `가장 깊게 경험한 영역은 WPF 기반 대규모 애플리케이션 개발입니다. MVVM 구조에서 복잡한 화면 상태와 사용자 인터랙션을 다루며 제품 규모가 커져도 화면 구조와 데이터 흐름을 안정적으로 유지하는 방법을 익혔습니다.`,
      `코그넥스에서는 AI 머신비전 플랫폼 VPDL의 UI/UX 리뉴얼, 제품 통합 대응, Migration Plugin, Easy UI Plugin과 사용자 로그 분석 기능을 구현했습니다.`,
      `이 경험을 React 프로젝트에도 적용했습니다. Moment ON에서는 콘텐츠·계정·저장 흐름을, Moment Play에서는 게임·랭킹·친구·초대 흐름을 서비스 단위로 연결했습니다.`,
    ],
  },
  {
    id: "moment-on",
    question: "Moment ON은 어떤 서비스인가요?",
    tags: ["React", "Supabase", "Content Platform"],
    answer: [
      `사주, 타로, 관계분석, 함께 질문, 다이어리와 캘린더를 하나의 감성 콘텐츠 경험으로 연결한 React·Supabase 기반 플랫폼입니다. Relationship Analyzer는 별도 대표 프로젝트가 아니라 이 서비스의 핵심 콘텐츠 중 하나입니다.`,
      `회원은 Supabase 인증과 사용자별 저장소를 사용하고, 비회원은 LocalStorage에 결과를 보관한 뒤 회원 계정으로 기록을 가져올 수 있습니다. 저장 결과 다시 보기와 PNG·PDF 리포트 내보내기도 구현했습니다.`,
      `핵심 콘텐츠, 계정, 결과 저장과 리포트 흐름은 구현 완료 상태이며 실제 유료 결제 시스템은 아직 연결하지 않았습니다. 현재 범위는 “핵심 서비스 구현 완료 / 결제 연동 예정”으로 구분합니다.`,
    ],
  },
  {
    id: "moment-play",
    question: "Moment Play는 어떤 서비스인가요?",
    tags: ["React", "JavaScript", "Game Service"],
    answer: [
      `2048, Memory Sequence, Sudoku, Omok을 포함한 14종 미니게임을 탐색하고 플레이하는 React·JavaScript 기반 게임 서비스입니다.`,
      `게임 결과와 기록, 게임별 랭킹, 회원가입과 온보딩, 친구 관계, 오목 게임 초대와 알림을 하나의 사용자 흐름으로 구성했습니다. 라이트·다크 테마와 게임 오디오 설정도 제공합니다.`,
      `핵심 게임 서비스 기능은 구현 완료 상태이며 실제 결제 또는 수익화 시스템은 아직 연결하지 않았습니다. 현재 범위는 “핵심 서비스 구현 완료 / 결제·수익화 연동 예정”으로 구분합니다.`,
    ],
  },
  {
    id: "functional-prototypes",
    question: "최근 만든 기능형 프로토타입에서는 무엇을 보여주나요?",
    tags: ["Functional Prototype", "Role-based UX", "Mock Data"],
    answer: [
      `Local Job Match에서는 구직자, 고용주와 운영 관리자의 채용 흐름을 연결했습니다. CoachHub에서는 관리자, PM, 코치와 참여자의 목표·실행·피드백 흐름을 구성했고, Classory에서는 원장·강사·학부모·학생의 학원 운영 경험을 역할별로 설계했습니다.`,
      `Code Bridge에서는 블록 명령과 JavaScript 코드, 도형 실행 결과를 한 화면에서 연결했습니다. 편집 상태와 실행 상태를 분리하고 최종 실행 결과로 미션을 검증하도록 구현했습니다.`,
      `이 프로젝트들은 실제 운영 서버가 연결된 상용 서비스라고 과장하지 않고, 사용자 역할과 전체 업무 흐름을 확인할 수 있는 Functional Prototype으로 구분합니다.`,
    ],
  },
  {
    id: "development-videos",
    question: "개발 영상을 공개한 이유는 무엇인가요?",
    tags: ["YouTube", "User Flow", "Demo"],
    answer: [
      `스크린샷만으로는 화면 사이의 이동, 역할별 기능과 상태 변화를 충분히 보여주기 어렵다고 생각했습니다.`,
      `그래서 Local Job Match, CoachHub, Classory와 Code Bridge의 핵심 사용자 흐름을 직접 시연하는 영상을 YouTube에 공개했습니다.`,
      `현재 공개한 영상은 총 4개이며 포트폴리오의 Development Logs 영역에서 확인할 수 있습니다.`,
    ],
  },
  {
    id: "code-bridge",
    question: "Code Bridge는 어떤 학습 도구인가요?",
    tags: ["Learning Tool", "Blocks", "TypeScript"],
    answer: [
      `블록 명령, 생성된 JavaScript 코드와 도형의 실행 결과를 한 화면에서 연결해 학습하는 비주얼 코딩 도구입니다.`,
      `이동·회전·반복·조건·이벤트·변수 블록과 실행·일시정지·한 단계 실행을 구현했고, 현재 실행 중인 블록과 코드 위치를 함께 강조합니다.`,
      `실제 실행 결과를 기준으로 확인하는 10단계 미션, 프로젝트 저장·불러오기와 Undo·Redo까지 구현한 기능형 프로토타입이며 YouTube 데모로 공개했습니다.`,
    ],
  },
  {
    id: "ux",
    question: "UI/UX 리뉴얼에서는 어떤 역할을 했나요?",
    tags: ["UI/UX", "Workflow", "Design System"],
    answer: [
      `AI 플랫폼 UI/UX 전면 리뉴얼 과정에서 사용자의 실제 작업 흐름을 기준으로 화면 구조를 다시 정리했습니다.`,
      `핵심 기능을 더 쉽게 따라갈 수 있도록 구성을 재설계하고 반복되는 스타일과 UI 요소를 공통화해 사용성과 유지보수성을 함께 개선했습니다.`,
      `그 결과 UI 관련 고객 문의가 20% 이상 감소했습니다. 이 경험은 개인 프로젝트에서도 역할별 흐름과 상태를 화면 구조로 풀어내는 기준이 됐습니다.`,
    ],
  },
  {
    id: "migration",
    question: "Migration Plugin은 어떤 문제를 해결했나요?",
    tags: ["Migration", "Data Structure", "Compatibility"],
    answer: [
      `기존 SuaKit 프로젝트를 새로운 VPDL 환경에서 사용할 수 있도록 버전별 프로젝트 파일 구조를 분석하고 자동 변환하는 기능이었습니다.`,
      `기존 데이터가 새로운 구조에서 깨지지 않도록 호환성과 예외 케이스를 함께 처리해 고객의 재작업 부담과 내부 기술 지원 시간을 줄였습니다.`,
    ],
  },
  {
    id: "wpf-to-react",
    question: "WPF 경력자가 React 프로젝트를 하는 이유는 무엇인가요?",
    tags: ["WPF", "React", "Product UI"],
    answer: [
      `프론트엔드 개발의 본질은 특정 기술보다 사용자 흐름과 화면 구조를 설계하는 일이라고 생각합니다.`,
      `WPF에서 쌓은 상태 관리, 사용자 인터랙션과 제품 구조 경험을 React의 컴포넌트·라우팅·웹 저장 흐름으로 확장했습니다.`,
      `Moment ON과 Moment Play에서는 실제 서비스 형태를, Local Job Match·CoachHub·Classory·Code Bridge에서는 역할별 전체 사용자 흐름을 구현하며 제품 UI 경험의 적용 범위를 넓혔습니다.`,
    ],
  },
];
