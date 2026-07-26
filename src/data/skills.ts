export type SkillContext =
  | "Professional Experience"
  | "Product Project"
  | "Functional Prototype"
  | "Supporting Tool";

export type SkillItem = {
  name: string;
  context: SkillContext;
  evidence: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "core-product",
    title: "Core Product Engineering",
    description:
      "대규모 데스크톱 제품과 기업용 솔루션에서 화면, 상태, 플러그인과 제품 구조를 설계하고 유지했습니다.",
    items: [
      { name: "C#", context: "Professional Experience", evidence: "금융·기업용 솔루션, Cognex VPDL" },
      { name: "WPF / MVVM", context: "Professional Experience", evidence: "Cognex VPDL 대규모 제품 UI" },
      { name: "WinForms", context: "Professional Experience", evidence: "기업용 관리자 도구" },
      { name: "UI Architecture", context: "Professional Experience", evidence: "VPDL 화면·상태·공통 컨트롤 구조" },
      { name: "Plugin Architecture", context: "Professional Experience", evidence: "Migration·Easy UI Plugin" },
      { name: "Data Migration", context: "Professional Experience", evidence: "SuaKit 프로젝트의 VPDL 변환" },
      { name: "ResourceDictionary", context: "Professional Experience", evidence: "WPF 공통 디자인 리소스" },
      { name: "ControlTemplate", context: "Professional Experience", evidence: "재사용 가능한 WPF 컨트롤" },
    ],
  },
  {
    id: "web-cross-platform",
    title: "Web & Cross-platform",
    description:
      "React 웹 서비스부터 모바일 앱과 Android WebView까지, 역할과 기기에 맞는 화면을 구현했습니다.",
    items: [
      { name: "React", context: "Product Project", evidence: "Moment ON·Moment Play와 전체 개인 프로젝트" },
      { name: "TypeScript", context: "Product Project", evidence: "Moment ON·Code Bridge·Classory·CoachHub" },
      { name: "JavaScript", context: "Product Project", evidence: "Moment Play·Ask Eun" },
      { name: "Angular", context: "Professional Experience", evidence: "기업용 웹 프론트엔드" },
      { name: "React Native", context: "Functional Prototype", evidence: "Local Job Match 모바일 앱" },
      { name: "Expo", context: "Functional Prototype", evidence: "구직자·고용주 앱" },
      { name: "HTML5 / CSS3", context: "Product Project", evidence: "반응형 웹과 디자인 구현" },
      { name: "Capacitor", context: "Functional Prototype", evidence: "Classory Android 지원" },
    ],
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    description:
      "인증, 저장, API와 데이터베이스를 화면 기능과 연결하고, 실패와 검증 조건까지 고려했습니다.",
    items: [
      { name: "Supabase", context: "Product Project", evidence: "Moment ON·Moment Play 인증과 데이터" },
      { name: "PostgreSQL", context: "Product Project", evidence: "Supabase 데이터 구조와 RLS" },
      { name: "REST API", context: "Professional Experience", evidence: "금융·기업 시스템과 외부 서비스 연동" },
      { name: "ASP.NET / .NET Framework", context: "Professional Experience", evidence: "기업용 솔루션 개발" },
      { name: "Python / FastAPI", context: "Supporting Tool", evidence: "API·자동화 프로젝트 경험" },
      { name: "MSSQL", context: "Professional Experience", evidence: "기업용 데이터 처리" },
      { name: "Oracle / MySQL", context: "Professional Experience", evidence: "기존 시스템 데이터 연동" },
      { name: "LocalStorage", context: "Product Project", evidence: "비회원 저장·브라우저 상태 유지" },
      { name: "JSON", context: "Professional Experience", evidence: "API와 프로젝트 데이터 변환" },
      { name: "C++ Native DLL", context: "Professional Experience", evidence: "기존 네이티브 모듈 연동" },
    ],
  },
  {
    id: "interaction-state",
    title: "State & Interaction",
    description:
      "복잡한 편집·실행·역할 상태를 화면에서 분리하고, 사용자가 이해하기 쉬운 조작 순서로 구성했습니다.",
    items: [
      { name: "React Router", context: "Product Project", evidence: "서비스 페이지와 역할별 화면" },
      { name: "Zustand", context: "Functional Prototype", evidence: "Code Bridge 편집·실행 상태" },
      { name: "dnd-kit", context: "Functional Prototype", evidence: "블록 드래그 앤 드롭" },
      { name: "Konva / React Konva", context: "Functional Prototype", evidence: "도형 편집·실행 캔버스" },
      { name: "Role-based UI", context: "Functional Prototype", evidence: "채용·코칭·학원 운영 프로젝트" },
      { name: "Responsive UI", context: "Product Project", evidence: "웹·태블릿·모바일 화면" },
    ],
  },
  {
    id: "quality-delivery",
    title: "Quality & Delivery",
    description:
      "구현 이후의 테스트, 빌드, 설치와 배포까지 확인해 제품이 반복해서 검증될 수 있게 구성했습니다.",
    items: [
      { name: "Vitest", context: "Product Project", evidence: "Moment ON·Moment Play·Code Bridge·Classory" },
      { name: "React Testing Library", context: "Product Project", evidence: "Moment ON 컴포넌트 검증" },
      { name: "Playwright", context: "Product Project", evidence: "Moment ON 핵심 기능 E2E" },
      { name: "ESLint", context: "Product Project", evidence: "웹 프로젝트 정적 검사" },
      { name: "Vite", context: "Product Project", evidence: "React 프로젝트 빌드" },
      { name: "npm workspaces", context: "Product Project", evidence: "Moment ON 모노레포" },
      { name: "pnpm monorepo", context: "Functional Prototype", evidence: "Local Job Match" },
      { name: "GitHub Actions / Pages", context: "Product Project", evidence: "검증과 정적 배포" },
      { name: "TeamCity", context: "Professional Experience", evidence: "VPDL CI/CD" },
      { name: "AWS EC2", context: "Professional Experience", evidence: "제품 테스트 환경" },
      { name: "InstallShield / NSIS", context: "Professional Experience", evidence: "설치 패키지 자동화" },
    ],
  },
  {
    id: "collaboration-design",
    title: "Collaboration & Design",
    description:
      "기획, QA, 엔진 개발과 제품 담당자 사이에서 요구사항과 기술 내용을 문서와 화면으로 정리했습니다.",
    items: [
      { name: "Git / GitHub", context: "Professional Experience", evidence: "소스 관리와 협업" },
      { name: "Jira / Confluence", context: "Professional Experience", evidence: "요구사항·이슈·문서 관리" },
      { name: "Teams", context: "Professional Experience", evidence: "조직 내 커뮤니케이션" },
      { name: "Figma", context: "Supporting Tool", evidence: "UI 설계와 디자인 시스템" },
      { name: "Photoshop", context: "Supporting Tool", evidence: "이미지·콘텐츠 편집" },
      { name: "Technical Writing", context: "Professional Experience", evidence: "블록체인 콘텐츠·기술 문서" },
      { name: "AI-assisted Development", context: "Supporting Tool", evidence: "설계 검토·리팩터링·테스트·문서화" },
    ],
  },
];
