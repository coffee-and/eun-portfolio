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

export type ResumeCareerHighlight = {
  title: string;
  description: string;
};

export type ResumeCareerCard = {
  id: string;
  title: string;
  period: string;
  meta: string;
  description: string;
  highlights: ResumeCareerHighlight[];
  tags: string[];
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

const careerHighlightsById: Record<string, ResumeCareerHighlight[]> = {
  cognex: [
    {
      title: "VPDL·SuaKit 제품 통합과 엔진 연동 구조",
      description:
        "WPF·MVVM 기반 화면과 상태 구조에 두 제품의 기능을 통합하고, C++ Native DLL 호출 결과와 훈련·추론·오류 상태를 UI 스레드에 안전하게 전달했습니다. Classification·Segmentation·Detection·OCR 도구를 플러그인 단위로 분리해 기능 중복을 줄이고 확장성과 장시간 연산 중 응답성을 확보했습니다.",
    },
    {
      title: "VPDL UI/UX 전면 리뉴얼과 디자인 체계",
      description:
        "고객 문의와 사용 패턴을 바탕으로 Train·Inference·Result 중심으로 작업 순서를 재구성했습니다. ResourceDictionary, Style, ControlTemplate과 Custom Control로 공통 디자인 체계를 만들고 기존·신규 UI 전환 방식을 적용해 통합 과정의 혼란을 줄였으며, UI 관련 고객 문의 20% 이상 감소에 기여했습니다.",
    },
    {
      title: "SuaKit Migration Plugin",
      description:
        "SuaKit 프로젝트의 버전별 파일 구조, 모델 정보, 이미지 경로와 학습 설정을 분석하고 파싱·변환 책임을 모듈화했습니다. 기존 데이터를 VPDL 형식으로 자동 변환하고 호환되지 않는 항목과 예외를 처리해 고객의 재작업과 반복적인 기술지원 부담을 줄였습니다.",
    },
    {
      title: "Quick HDM GUI와 HDM Red 인터랙티브 가이드",
      description:
        "도구 특성에 맞는 Quick HDM 전용 GUI와 HDM Red의 단계별 인터랙티브 안내를 개발했습니다. 사용성 테스트 결과를 반영해 안내 순서와 화면 피드백을 조정하고 처음 사용하는 사용자의 학습 부담을 낮췄습니다.",
    },
    {
      title: "딥러닝 설정 파라미터 자동 복원",
      description:
        "저장된 훈련 모델의 메타데이터를 읽어 관련 매개변수를 자동 초기화·복원하고, 모델 구조 변경 시 적용 가능한 값을 판단하도록 구성했습니다. 복원 실패와 호환되지 않는 설정에 대한 검증과 사용자 안내도 함께 구현했습니다.",
    },
    {
      title: "사용자 작업 기록과 Excel 리포트",
      description:
        "workspace와 tool의 생성·수정·삭제, 모델 학습, 이미지 처리와 추론 작업을 기록하고 시간·작업 유형별 로그 뷰어와 Excel 내보내기를 구현했습니다. QA와 고객지원이 실제 작업 순서를 근거로 문제를 재현하고 원인을 분석할 수 있게 했습니다.",
    },
    {
      title: "런타임 워크스페이스 분석 도구",
      description:
        "VPDL 클라이언트를 실행하지 않고도 DLL 버전별 파라미터와 머신비전 도구의 워크스페이스 설정을 읽고 비교하는 독립 실행형 진단 도구를 개발했습니다. 클라이언트 의존성을 분리해 개발과 고객지원의 분석 작업을 단순화했습니다.",
    },
    {
      title: "초보자용 Easy UI Plugin",
      description:
        "랜딩·시작·이미지 불러오기·도구 선택·학습·결과 확인 순서로 사용 과정을 단순화하고 주요 머신비전 도구의 안내형 화면을 구성했습니다. 단계별 필수 항목만 노출하고 성능이 우수한 모델을 추천하는 Auto Mode를 구현했습니다.",
    },
    {
      title: "빌드·테스트·설치·배포 환경 운영",
      description:
        "TeamCity 기반 빌드·테스트 자동화, AWS EC2 테스트 환경, InstallShield·NSIS Windows 설치 패키지와 릴리즈 설정을 운영했습니다. 도움말 파일을 제품 설치 패키지와 분리해 문서 변경을 독립 배포할 수 있게 하고 반복 작업과 설치 오류 가능성을 줄였습니다.",
    },
    {
      title: "외부 연동과 제품 협업",
      description:
        "RESTful API·JSON 직렬화, 외부 SDK·장비·Native 모듈 연동을 수행했습니다. 기획·QA·엔진 개발자와 기능 명세, 가이드와 기술 문서를 작성하며 제품 구현부터 검증·운영까지 연결했습니다.",
    },
  ],
  artifriends: [
    {
      title: "『사슬로 배우는 블록체인 첫걸음』 집필과 시각화",
      description:
        "블록체인의 핵심 개념과 선행 지식을 입문자가 따라갈 수 있는 순서로 재구성하고, 모호하거나 오해하기 쉬운 표현을 검토해 사례를 보강했습니다. 아키텍처 다이어그램, 개념 시각화와 도서 삽입 이미지를 제작해 복잡한 기술을 문장과 도식으로 함께 설명했습니다.",
    },
  ],
  fusiondata: [
    {
      title: "ADAgent 솔루션 개발·유지보수",
      description:
        "DevExpress 기반 Active Directory 계정·그룹 정책 관리 화면을 개발하고 기존 기능을 유지보수했습니다. AD 구조와 정책을 분석해 PowerShell 명령, PostgreSQL 데이터와 연결하고 권한·연결·운영 예외를 점검했습니다.",
    },
    {
      title: "ProcessWatchdog 솔루션 유지보수",
      description:
        "C# 기반 프로세스 모니터링 코드와 상태 확인 기능을 분석하고 오류 수정과 예외 처리를 수행해 운영 중인 프로세스를 안정적으로 감시할 수 있도록 지원했습니다.",
    },
    {
      title: "모듈 통합 설치 프로그램",
      description:
        "여러 모듈의 설치 순서와 의존 관계를 분석하고 NSIS .nsi 스크립트로 하나의 Setup 프로그램에 통합했습니다. 설치·삭제·업데이트와 오류 상황을 점검해 배포와 설치 작업을 단순화했습니다.",
    },
  ],
  "handy-his": [
    {
      title: "TOSS·LGU+ 사내 문서 뷰어",
      description:
        "C#과 JavaScript로 사내 PDF 뷰어를 개발하고 사용자 식별 워터마크, 지정 단축키 제한과 문서 로딩 예외 처리를 구현해 보안이 필요한 문서 열람 환경을 제공했습니다.",
    },
    {
      title: "미래과학아카데미 메일 첨부파일 뷰어",
      description:
        "PDF·PPT·Word·Excel·HTML·TXT와 암호 설정 문서를 JPG로 변환해 ZIP으로 압축했습니다. ZIP·ARZ·RAR 파일은 내부 구조를 해제·변환·재압축하고 형식 차이, 암호 여부와 변환 실패 상황을 처리했습니다.",
    },
  ],
  "standard-chartered": [
    {
      title: "여신관리부 메인 데이터 관리",
      description:
        "SQL과 Oracle로 여신 건별 거래내역을 입력·편집하고 누락과 오류를 검증하며 데이터를 유지보수했습니다. 반복 데이터 작업을 지원하는 Excel 기능을 개발해 부서의 대량 업무 데이터 처리와 정리를 지원했습니다.",
    },
  ],
  finger: [
    {
      title: "신한은행 머니멘토",
      description:
        "C++과 JavaScript로 은행·카드·증권사 데이터 연동과 자산 조회 기능을 개발했습니다. 기관별 데이터 형식과 오류 조건을 반영해 연동 로직을 유지보수하고 운영 중 고객 문의와 데이터 오류를 분석했습니다.",
    },
    {
      title: "국민은행 가계부",
      description:
        "은행·카드·증권사 거래와 자산을 통합하는 계좌·거래 조회 기능을 개발하고 기관별 연동 스크립트를 유지보수했습니다. 조회 실패와 데이터 형식 차이를 처리해 자산관리·가계부 서비스 운영을 지원했습니다.",
    },
    {
      title: "myFingerCM 계좌관리 솔루션",
      description:
        "여러 금융기관의 계좌와 자산 정보를 통합 조회하는 솔루션을 개발·유지보수했습니다. 신한카드 자금팀, 현대캐피탈·현대카드와 여행사 등 고객사의 운영 요청, 기관별 연동 오류와 고객지원 업무를 담당했습니다.",
    },
    {
      title: "스크래핑 솔루션 개발·유지보수",
      description:
        "은행·카드·통신사·증권사·공공기관의 조회·처리 기능을 자체 개발 도구의 JavaScript 스크립트로 작성하고 계좌관리 프로그램과 고객사 시스템에 연결했습니다. 기관 사이트 변경, 조회 실패와 예외 상황에 맞춰 스크립트를 지속적으로 유지보수했습니다.",
    },
    {
      title: "금융 서비스 운영과 제품 기획",
      description:
        "C#·SQL·Oracle 기반 데이터 처리와 운영 오류 대응, 스크래핑 솔루션 관리와 고객지원을 수행했으며 웹·앱 기능 기획에도 참여했습니다.",
    },
  ],
};

export const careerCards: ResumeCareerCard[] = careers.map((career) => ({
  id: career.id,
  title: getCompanyDisplayName(career),
  period: career.period,
  meta: career.role,
  description: career.overview,
  highlights:
    careerHighlightsById[career.id] ??
    career.projects.map((project) => ({
      title: project.title,
      description: [...project.work, ...project.result].join(" "),
    })),
  tags: career.technologies,
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