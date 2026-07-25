export type CareerProject = {
  title: string;
  context: string;
  work: string[];
  result: string[];
  technologies: string[];
};

export type Career = {
  id: string;
  order: number;
  company: string;
  period: string;
  role: string;
  domain: string[];
  overview: string;
  responsibilities: string[];
  projects: CareerProject[];
  technologies: string[];
};

export const careers: Career[] = [
  {
    id: "cognex",
    order: 1,
    company: "코그넥스(구 수아랩)",
    period: "2019.08 — 2024.06",
    role: "Front-end Engineer · AI 머신비전 플랫폼 VPDL",
    domain: ["AI Machine Vision", "Product UI", "Desktop Platform", "DevOps"],
    overview:
      "AI 머신비전 플랫폼 VPDL의 프론트엔드 개발을 담당했습니다. WPF·MVVM 기반 대규모 애플리케이션에서 화면과 상태를 구현하는 역할을 넘어, 제품 통합과 사용성 개선, 기존 프로젝트 전환, 로그·리포트, 테스트와 설치 배포까지 제품 전반을 개선했습니다.",
    responsibilities: [
      "WPF·MVVM 기반 대규모 애플리케이션 화면과 복잡한 상태·상호작용 구현",
      "VIDI·SuaKit·VPDL의 기능과 화면을 하나의 제품 경험으로 통합",
      "제품 전역에서 재사용할 디자인 리소스와 공통 컨트롤 구조 설계",
      "고객의 실제 작업 순서와 반복 문의를 분석해 UI 구조와 기능 배치 개선",
      "프로젝트 파일 변환, 사용자 작업 기록, 리포트와 운영 도구 구현",
      "TeamCity, AWS EC2, InstallShield·NSIS를 이용한 검증·패키징·배포 환경 개선",
    ],
    projects: [
      {
        title: "VPDL UI/UX 전면 리뉴얼과 디자인 체계",
        context:
          "VIDI와 SuaKit 기능이 VPDL로 통합되는 과정에서 화면마다 색상, 여백, 컨트롤과 사용 방식이 달라 제품 일관성과 기능 접근성이 부족했습니다.",
        work: [
          "고객 문의와 사용 패턴을 바탕으로 Train·Inference·Result 중심으로 주요 작업 단계를 재구성했습니다.",
          "색상, 폰트, 여백과 상태 표현을 WPF ResourceDictionary 기반의 공통 리소스로 분리했습니다.",
          "버튼, 입력창, 드롭다운과 탭을 공통 Style·ControlTemplate·Custom Control로 구성했습니다.",
          "기존 UI와 신규 UI를 전환할 수 있는 구조를 두고 기능별 적용과 검증을 거쳐 단계적으로 배포했습니다.",
        ],
        result: [
          "VIDI와 SuaKit의 서로 다른 화면을 일관된 VPDL 제품으로 통합",
          "UI 관련 고객 문의 20% 이상 감소에 기여",
          "공통 리소스 수정만으로 전체 제품에 디자인 변경을 반영할 수 있는 유지보수 구조 확보",
        ],
        technologies: ["C#", "WPF", "MVVM", "ResourceDictionary", "ControlTemplate"],
      },
      {
        title: "SuaKit Migration Plugin",
        context:
          "기존 SuaKit 고객이 VPDL로 전환할 때 프로젝트를 다시 구성해야 했고, 버전마다 파일 구조가 달라 기술지원 부담이 반복됐습니다.",
        work: [
          "SuaKit 프로젝트의 버전별 파일 구조와 모델 정보, 이미지 경로, 학습 설정을 분석했습니다.",
          "버전 확인, 파일 파싱과 데이터 변환 책임을 모듈별로 분리했습니다.",
          "기존 데이터를 VPDL 형식으로 자동 변환하고 호환되지 않는 항목과 예외 상황을 안전하게 처리했습니다.",
        ],
        result: [
          "고객의 프로젝트 재작업과 플랫폼 전환 부담 감소",
          "버전별 문의와 반복적인 내부 기술지원 시간 감소",
        ],
        technologies: ["C#", "WPF", "File Parsing", "Data Migration", "Compatibility"],
      },
      {
        title: "Easy UI Plugin",
        context:
          "기존 AI 학습 제품은 설정 항목과 단계가 많아 전문 지식이 부족한 사용자에게 진입 장벽이 높았습니다.",
        work: [
          "Image → Label → Train → Result → Save 순서로 사용 과정을 단순화했습니다.",
          "각 단계에서 필요한 항목만 보여주는 안내형 화면을 설계했습니다.",
          "Result 화면에 성능이 우수한 모델을 추천하는 Auto Mode를 구현했습니다.",
        ],
        result: [
          "초보 사용자가 제품의 핵심 기능을 이해하고 실행하기 쉬운 인터페이스 제공",
          "교육과 고객지원에서 반복되는 설명 부담 완화",
        ],
        technologies: ["C#", "WPF", "MVVM", "Plugin Architecture", "Product UX"],
      },
      {
        title: "사용자 작업 기록과 Excel 리포트",
        context:
          "문제 발생 전후의 사용자 작업 기록이 충분하지 않아 QA와 고객지원에서 원인을 재현하고 분석하기 어려웠습니다.",
        work: [
          "workspace와 tool 단위의 생성·수정·삭제, 모델 학습, 이미지 처리와 추론 작업을 기록했습니다.",
          "시간과 작업 유형을 기준으로 기록을 조회할 수 있도록 데이터 구조를 정리했습니다.",
          "필요한 작업 이력을 Excel 리포트로 추출하는 기능을 구현했습니다.",
        ],
        result: [
          "QA와 고객지원에서 실제 작업 순서를 근거로 문제를 분석할 수 있는 기반 마련",
          "품질 이슈 원인 확인과 고객 대응 과정의 정확도 개선",
        ],
        technologies: ["C#", "WPF", "Logging", "Excel Reporting", "Diagnostics"],
      },
      {
        title: "테스트·설치·배포 환경 개선",
        context:
          "테스트 환경 구성과 설치 패키지 배포에 반복 작업이 많았고, 환경별 설정 차이로 릴리즈 과정의 부담이 컸습니다.",
        work: [
          "TeamCity 기반 빌드와 테스트 설정을 정리하고 반복 작업을 자동화했습니다.",
          "AWS EC2 테스트 환경을 구성해 다양한 조건에서 제품을 검증했습니다.",
          "InstallShield·NSIS 기반 설치 패키지 생성과 배포 설정을 개선했습니다.",
          "도움말 파일을 전체 설치 패키지와 분리해 문서 변경만 별도로 배포할 수 있게 했습니다.",
        ],
        result: [
          "반복적인 릴리즈 작업과 설치 오류 가능성 감소",
          "제품 검증과 배포 효율, 릴리즈 안정성 개선",
        ],
        technologies: ["TeamCity", "AWS EC2", "InstallShield", "NSIS", "CI/CD"],
      },
    ],
    technologies: [
      "C#",
      "WPF",
      "MVVM",
      ".NET Framework",
      "Plugin Architecture",
      "TeamCity",
      "AWS EC2",
      "InstallShield",
      "NSIS",
      "Git",
      "Jira",
      "Confluence",
    ],
  },
  {
    id: "artifriends",
    order: 2,
    company: "아티프렌즈",
    period: "2025.04 — 2025.10",
    role: "Technical Content Creator",
    domain: ["Blockchain", "Technical Writing", "Education"],
    overview:
      "블록체인 기술을 처음 접하는 독자가 개념을 순서대로 이해할 수 있도록 기술 콘텐츠와 문서를 작성하고 검수했습니다. 개발 경험을 바탕으로 복잡한 기술 용어를 사례와 단계 중심의 설명으로 재구성했습니다.",
    responsibilities: [
      "블록체인 기술 콘텐츠와 기술 문서 작성·검수",
      "전문 용어와 기술 개념을 입문자 관점의 설명 순서로 재구성",
      "기술 입문 도서 집필 참여",
      "내용의 정확성과 독자의 이해 가능성을 함께 고려한 문서 편집",
    ],
    projects: [
      {
        title: "블록체인 입문 콘텐츠와 기술 문서",
        context:
          "기술 배경이 없는 독자는 개념 사이의 관계와 사용 맥락을 파악하기 어려워 단순한 용어 설명만으로는 내용을 이해하기 어려웠습니다.",
        work: [
          "핵심 개념을 선행 지식과 학습 순서에 맞게 배치했습니다.",
          "개발자의 관점에서 기술적으로 모호하거나 오해할 수 있는 표현을 검토했습니다.",
          "입문자가 따라갈 수 있도록 사례와 단계별 설명을 보강했습니다.",
        ],
        result: ["기술 개념을 초보자에게 전달하는 설명·문서화 역량 확장"],
        technologies: ["Technical Writing", "Content Review", "Blockchain"],
      },
    ],
    technologies: ["Technical Writing", "Documentation", "Content Review", "Blockchain"],
  },
  {
    id: "fusiondata",
    order: 3,
    company: "퓨전데이타",
    period: "2018.11 — 2019.07",
    role: "Software Engineer",
    domain: ["Enterprise", "Active Directory", "Administration UI"],
    overview:
      "Active Directory 관리 솔루션의 관리자 화면을 개발했습니다. 계정과 조직 정보를 다루는 운영자의 반복 작업을 고려해 조회·관리 기능을 안정적으로 사용할 수 있는 기업용 UI를 구현했습니다.",
    responsibilities: [
      "DevExpress 기반 관리자 화면 개발",
      "Active Directory 계정·조직 관리 기능 구현",
      "운영자가 반복해서 사용하는 조회와 관리 작업의 사용성 개선",
      "기업용 관리 도구에 필요한 예외 처리와 안정성 고려",
    ],
    projects: [
      {
        title: "Active Directory 관리 솔루션",
        context:
          "조직과 계정 정보를 지속적으로 조회하고 변경하는 관리자는 많은 데이터를 빠르고 안전하게 처리할 수 있는 화면이 필요했습니다.",
        work: [
          "계정과 조직 관리에 필요한 관리자 화면을 DevExpress 기반으로 구현했습니다.",
          "반복적인 조회·변경 작업을 고려해 정보 배치와 조작 방식을 정리했습니다.",
          "기업 환경에서 발생할 수 있는 오류와 예외 상황을 고려했습니다.",
        ],
        result: ["운영자 중심의 기업용 관리 UI 개발 경험 확보"],
        technologies: ["C#", "WinForms", "DevExpress", "Active Directory"],
      },
    ],
    technologies: ["C#", "WinForms", "DevExpress", "Active Directory", "Enterprise UI"],
  },
  {
    id: "handy-finger",
    order: 4,
    company: "핸디에이치아이에스 / 핑거",
    period: "2016.04 — 2018.11",
    role: "Software Engineer",
    domain: ["Finance", "Document Security", "Data Integration"],
    overview:
      "금융기관 데이터 연동과 계좌통합 서비스, 문서 보안 솔루션, 파일 변환 시스템을 개발했습니다. 외부 시스템과 데이터를 연결하는 과정에서 안정적인 처리, 예외 대응과 기업 환경의 호환성을 경험했습니다.",
    responsibilities: [
      "금융기관 데이터 연동과 계좌통합 서비스 개발",
      "문서 보안 솔루션과 파일 변환 시스템 구현",
      "서버·데이터베이스·클라이언트 사이의 데이터 처리와 예외 대응",
      "기업용 솔루션 환경의 안정성과 호환성 고려",
    ],
    projects: [
      {
        title: "금융 데이터 연동과 계좌통합 서비스",
        context:
          "여러 금융기관의 데이터를 한 서비스에서 처리하기 위해 서로 다른 데이터 형식과 오류 상황을 안정적으로 다뤄야 했습니다.",
        work: [
          "금융기관 데이터 연동과 계좌 정보를 통합해 제공하는 기능을 개발했습니다.",
          "데이터 처리 중 발생할 수 있는 예외와 실패 상황을 고려했습니다.",
          "기업 시스템의 기존 환경과 연동 조건을 확인하며 기능을 구현했습니다.",
        ],
        result: ["금융 데이터 연동과 안정적인 예외 처리 경험 확보"],
        technologies: ["C#", ".NET", "REST API", "JSON", "SQL"],
      },
      {
        title: "문서 보안과 파일 변환 시스템",
        context:
          "기업 문서를 안전하게 처리하고 여러 형식으로 변환하는 과정에서 파일 호환성과 실패 대응이 중요했습니다.",
        work: [
          "문서 보안 솔루션과 파일 변환 기능을 구현했습니다.",
          "파일 처리와 변환 과정에서 오류와 호환성 문제를 고려했습니다.",
          "운영 환경에서 안정적으로 사용할 수 있도록 예외 상황을 점검했습니다.",
        ],
        result: ["문서·파일 처리 기반 기업용 솔루션 개발 경험 확보"],
        technologies: ["C#", ".NET", "File Conversion", "Document Security"],
      },
    ],
    technologies: [
      "C#",
      ".NET Framework",
      "ASP.NET",
      "REST API",
      "JSON",
      "MSSQL",
      "Oracle",
      "MySQL",
      "C++ Native DLL Integration",
    ],
  },
];
