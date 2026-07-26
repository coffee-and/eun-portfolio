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
    role: "연구원 · AI 머신비전 플랫폼 VPDL 개발팀",
    domain: ["AI Machine Vision", "Windows Desktop", "Product UI", "DevOps"],
    overview:
      "딥러닝 기반 머신비전 솔루션 VPDL·SuaKit의 개발과 UI/UX 고도화를 담당했습니다. WPF·MVVM 기반 대규모 Windows 애플리케이션, C++ Native DLL 연동, 플러그인 아키텍처, 비동기 처리, 로그·분석 도구와 설치·배포 환경까지 제품 전반을 개발하고 유지보수했습니다.",
    responsibilities: [
      "WPF·MVVM 기반 대규모 Windows 데스크톱 애플리케이션 설계·구현·유지보수",
      "C++ 기반 딥러닝 훈련·추론 엔진과 C# UI 사이의 Native DLL 인터페이스 설계",
      "훈련 상태·추론 결과·오류 상태를 UI에 실시간 반영하고 UI 스레드 안전성 확보",
      "Classification·Segmentation·Detection·OCR 도구를 확장할 수 있는 플러그인 구조 설계",
      "장시간 훈련·분석·추론 중 UI 응답성을 유지하는 비동기 처리와 작업 취소·상태 전환 구현",
      "RESTful API·JSON 직렬화와 외부 SDK·장비·Native 모듈 연동",
      "TeamCity·AWS EC2·InstallShield·NSIS 기반 빌드·테스트·패키징·배포 환경 운영",
      "기획·QA·엔진 개발자와 협업하며 기능 명세, 가이드와 기술 문서 작성",
    ],
    projects: [
      {
        title: "VPDL·SuaKit 제품 통합과 엔진 연동 구조",
        context:
          "서로 다른 제품 구조와 UI, C++ 딥러닝 엔진을 하나의 VPDL 애플리케이션에서 안정적으로 연결하고 기능 중복을 줄여야 했습니다.",
        work: [
          "WPF·MVVM 기반 화면과 상태 구조를 설계하고 제품별 기능을 VPDL에 통합했습니다.",
          "C++ Native DLL API 호출 결과를 안전하게 UI 스레드에 전달하는 연동 구조를 구현했습니다.",
          "훈련·추론·오류 상태와 파라미터 변경을 UI에 실시간 반영했습니다.",
          "Classification·Segmentation·Detection·OCR 도구를 플러그인 단위로 분리해 신규 도구 추가 시 공통 UI와 로직을 재사용하도록 구성했습니다.",
        ],
        result: [
          "SuaKit과 VPDL의 기능 중복을 줄이고 하나의 제품 구조로 통합",
          "Native 엔진 변경과 신규 도구 추가에 유연하게 대응할 수 있는 확장 구조 확보",
          "장시간 연산 중에도 UI 응답성과 상태 일관성을 유지",
        ],
        technologies: ["C#", "WPF", "MVVM", "C++", "Native DLL", "Multithreading", "Plugin Architecture"],
      },
      {
        title: "VPDL UI/UX 전면 리뉴얼과 디자인 체계",
        context:
          "VIDI와 SuaKit 기능이 VPDL로 통합되는 과정에서 화면마다 색상, 여백, 컨트롤과 사용 방식이 달라 제품 일관성과 기능 접근성이 부족했습니다.",
        work: [
          "고객 문의와 사용 패턴을 바탕으로 Train·Inference·Result 중심으로 주요 작업 단계를 재구성했습니다.",
          "색상, 폰트, 여백과 상태 표현을 WPF ResourceDictionary 기반 공통 리소스로 분리했습니다.",
          "버튼, 입력창, 드롭다운과 탭을 공통 Style·ControlTemplate·Custom Control로 구성했습니다.",
          "기존 UI와 신규 UI를 선택할 수 있는 스위치형 인터페이스를 적용해 변경 과정의 혼란을 줄였습니다.",
        ],
        result: [
          "VIDI와 SuaKit의 서로 다른 화면을 일관된 VPDL 제품으로 통합",
          "UI 관련 고객 문의 20% 이상 감소에 기여",
          "공통 리소스 수정으로 전체 제품 디자인을 관리할 수 있는 유지보수 구조 확보",
        ],
        technologies: ["C#", "WPF", "MVVM", "ResourceDictionary", "ControlTemplate", "Figma"],
      },
      {
        title: "SuaKit Migration Plugin",
        context:
          "기존 SuaKit 고객이 VPDL로 전환할 때 프로젝트를 다시 구성해야 했고, 버전마다 파일 구조가 달라 기술지원 부담이 반복됐습니다.",
        work: [
          "SuaKit 프로젝트의 버전별 파일 구조, 모델 정보, 이미지 경로와 학습 설정을 분석했습니다.",
          "버전 확인, 파일 파싱과 데이터 변환 책임을 모듈별로 분리했습니다.",
          "기존 데이터를 VPDL 형식으로 자동 변환하고 호환되지 않는 항목과 예외 상황을 처리했습니다.",
        ],
        result: [
          "고객의 프로젝트 재작업과 플랫폼 전환 부담 감소",
          "버전별 문의와 반복적인 내부 기술지원 시간 감소",
        ],
        technologies: ["C#", "WPF", "File Parsing", "Data Migration", "Compatibility"],
      },
      {
        title: "Quick HDM GUI와 HDM Red 인터랙티브 가이드",
        context:
          "Green·Red 도구의 기능에 맞는 전용 화면과 처음 사용하는 사용자를 위한 직관적인 안내가 필요했습니다.",
        work: [
          "Quick HDM 전용 GUI 구성 요소를 설계하고 구현했습니다.",
          "HDM Red 모드에서 단계별 사용 방법을 안내하는 인터랙티브 구성 요소를 개발했습니다.",
          "사용성 테스트 결과를 반영해 안내 순서와 화면 피드백을 조정했습니다.",
        ],
        result: [
          "도구별 기능에 맞춘 전용 사용 화면 제공",
          "처음 사용하는 사용자가 주요 기능을 익힐 수 있는 안내 환경 구성",
        ],
        technologies: ["C#", "WPF", "MVVM", "Interactive Guide", "Product UI"],
      },
      {
        title: "딥러닝 설정 파라미터 자동 복원",
        context:
          "저장된 훈련 모델을 다시 사용할 때 모델 정보와 현재 설정이 달라 사용자가 파라미터를 수동으로 맞춰야 했습니다.",
        work: [
          "훈련 모델 정보를 읽어 관련 매개변수를 자동으로 초기화·복원하는 기능을 구현했습니다.",
          "모델 구조가 변경된 경우에도 적용 가능한 파라미터를 판단해 다시 설정하도록 구성했습니다.",
          "복원 실패와 호환되지 않는 설정을 사용자에게 안내하는 예외 처리를 추가했습니다.",
        ],
        result: [
          "기존 모델을 다시 사용할 때 반복 설정 작업 감소",
          "모델 구조 변경 시에도 유연하게 설정을 적용할 수 있는 사용 환경 제공",
        ],
        technologies: ["C#", "WPF", "Model Metadata", "Parameter Mapping", "Validation"],
      },
      {
        title: "사용자 작업 기록과 Excel 리포트",
        context:
          "문제 발생 전후의 사용자 작업 기록이 충분하지 않아 QA와 고객지원에서 원인을 재현하고 분석하기 어려웠습니다.",
        work: [
          "workspace와 tool 단위의 생성·수정·삭제, 모델 학습, 이미지 처리와 추론 작업을 기록했습니다.",
          "시간과 작업 유형을 기준으로 기록을 조회할 수 있는 로그 뷰어를 구현했습니다.",
          "필요한 작업 이력을 Excel 리포트로 추출하는 기능을 개발했습니다.",
        ],
        result: [
          "QA와 고객지원에서 실제 작업 순서를 근거로 문제를 분석할 수 있는 기반 마련",
          "품질 이슈 원인 확인과 고객 대응 과정의 정확도 개선",
        ],
        technologies: ["C#", "WPF", "Logging", "Excel Reporting", "Diagnostics"],
      },
      {
        title: "런타임 워크스페이스 분석 도구",
        context:
          "VPDL 클라이언트를 실행하지 않고도 DLL 버전과 도구별 워크스페이스 파라미터를 확인할 수 있는 진단 도구가 필요했습니다.",
        work: [
          "DLL 버전별 파라미터를 읽어 출력하는 독립 실행형 분석 도구를 개발했습니다.",
          "각 머신비전 도구의 워크스페이스 설정을 분석하고 비교할 수 있도록 정리했습니다.",
          "클라이언트와 독립적으로 동작하도록 의존성을 분리했습니다.",
        ],
        result: [
          "버전과 설정 차이를 빠르게 확인할 수 있는 진단 수단 제공",
          "고객지원과 개발 과정의 파라미터 분석 작업 단순화",
        ],
        technologies: ["C#", ".NET", "DLL Analysis", "Workspace", "Diagnostics"],
      },
      {
        title: "초보자용 Easy UI Plugin",
        context:
          "기존 AI 학습 제품은 설정 항목과 단계가 많아 전문 지식이 부족한 사용자에게 진입 장벽이 높았습니다.",
        work: [
          "랜딩 페이지, 시작 페이지, 이미지 불러오기, 도구 선택, 학습과 결과 확인 순서로 사용 과정을 단순화했습니다.",
          "Classification·Detection·Segmentation·OCR 등 주요 도구를 선택할 수 있게 구성했습니다.",
          "각 단계에서 필요한 항목만 보여주는 안내형 화면과 성능이 우수한 모델을 추천하는 Auto Mode를 구현했습니다.",
        ],
        result: [
          "초보 사용자가 제품의 핵심 기능을 이해하고 실행하기 쉬운 인터페이스 제공",
          "교육과 고객지원에서 반복되는 설명 부담 완화",
        ],
        technologies: ["C#", "WPF", "MVVM", "Plugin Architecture", "Product UX"],
      },
      {
        title: "빌드·테스트·설치·배포 환경 운영",
        context:
          "테스트 환경 구성과 Windows 설치 패키지 배포에 반복 작업이 많았고, 환경별 설정 차이로 릴리즈 과정의 부담이 컸습니다.",
        work: [
          "TeamCity 기반 빌드와 테스트 자동화 환경을 구성하고 테스트 코드 의존성을 관리했습니다.",
          "AWS EC2 가상머신을 생성·관리하며 다양한 조건의 테스트 환경을 운영했습니다.",
          "InstallShield·NSIS 기반 Windows 설치 패키지와 릴리즈 설정을 관리했습니다.",
          "도움말 파일을 전체 설치 패키지와 분리해 문서 변경만 별도로 배포할 수 있게 했습니다.",
        ],
        result: [
          "반복적인 릴리즈 작업과 설치 오류 가능성 감소",
          "제품 검증과 패키징 효율, 배포 안정성 개선",
        ],
        technologies: ["TeamCity", "AWS EC2", "InstallShield", "NSIS", "CI/CD"],
      },
    ],
    technologies: [
      "C#", "WPF", "MVVM", ".NET Framework", "C++", "Native DLL", "REST API", "JSON",
      "JavaScript", "TypeScript", "React", "Angular", "HTML", "CSS", "Plugin Architecture",
      "Multithreading", "TeamCity", "AWS EC2", "InstallShield", "NSIS", "Git", "Jira",
      "Confluence", "Teams", "Figma",
    ],
  },
  {
    id: "artifriends",
    order: 2,
    company: "아티프렌즈",
    period: "2024.09 — 2025.10",
    role: "콘텐츠 제작 · 프리랜서",
    domain: ["Blockchain", "Technical Writing", "Book", "Visual Documentation"],
    overview:
      "블록체인 기술을 처음 접하는 독자가 개념과 기술 구조를 순서대로 이해할 수 있도록 콘텐츠를 작성하고 시각 자료를 제작했습니다. 『사슬로 배우는 블록체인 첫걸음』 집필에 참여해 설명 구조, 아키텍처 다이어그램과 도서 삽입용 이미지를 구성했습니다.",
    responsibilities: [
      "블록체인 개념과 기술 관계를 논리적인 설명 순서로 재구성",
      "초보자가 이해할 수 있는 단계별 기술 설명 작성·검수",
      "아키텍처 다이어그램과 개념 시각화 자료 제작",
      "기술 설명 이미지와 도서 삽입용 도식 제작",
      "내용의 정확성, 가독성과 시각적 전달력을 함께 고려한 편집",
    ],
    projects: [
      {
        title: "『사슬로 배우는 블록체인 첫걸음』 도서 집필",
        context:
          "블록체인 개념은 용어와 구성 요소가 서로 연결돼 있어 입문자가 단편적인 설명만으로 전체 구조를 이해하기 어려웠습니다.",
        work: [
          "핵심 개념과 선행 지식을 독자가 따라갈 수 있는 설명 순서로 재배치했습니다.",
          "기술적으로 모호하거나 오해할 수 있는 표현을 검토하고 사례를 보강했습니다.",
          "아키텍처 다이어그램, 개념 시각화와 기술 설명 이미지를 제작했습니다.",
          "복잡한 내용을 단계별 문장과 도식으로 나눠 도서 원고의 가독성을 높였습니다.",
        ],
        result: [
          "블록체인 입문 도서 집필과 기술 콘텐츠 제작 참여",
          "복잡한 기술을 문장과 시각 자료로 설명하는 문서화 역량 확장",
        ],
        technologies: ["Technical Writing", "Content Review", "Architecture Diagram", "Figma", "Blockchain"],
      },
    ],
    technologies: ["Technical Writing", "Documentation", "Content Review", "Architecture Diagram", "Figma", "Blockchain"],
  },
  {
    id: "fusiondata",
    order: 3,
    company: "퓨전데이타",
    period: "2018.11 — 2019.07",
    role: "연구원 · 연구팀",
    domain: ["Active Directory", "Enterprise Administration", "Process Monitoring", "Installer"],
    overview:
      "C#·WinForms 기반 기업용 솔루션을 개발하고 유지보수했습니다. Active Directory 계정·그룹 정책 관리, 프로세스 모니터링과 여러 모듈을 하나로 설치하는 통합 설치 프로그램을 담당했습니다.",
    responsibilities: [
      "C#·WinForms·DevExpress 기반 관리자 솔루션 개발과 유지보수",
      "Active Directory 계정·그룹 정책 제어 기능 분석과 구현",
      "PowerShell을 이용한 Active Directory 관리 작업 연동",
      "PostgreSQL 데이터 조회·저장과 운영 기능 유지보수",
      "프로세스 모니터링 프로그램 유지보수",
      "NSIS .nsi 스크립트를 이용한 통합 설치 프로그램 제작",
    ],
    projects: [
      {
        title: "ADAgent 솔루션 개발·유지보수",
        context:
          "기업 관리자가 Active Directory의 계정과 그룹 정책을 화면에서 조회하고 안전하게 제어할 수 있는 관리 솔루션이 필요했습니다.",
        work: [
          "DevExpress 기반 계정·그룹 정책 관리 화면을 개발하고 기존 기능을 유지보수했습니다.",
          "Active Directory 구조와 정책을 분석해 관리 기능에 반영했습니다.",
          "PowerShell 명령과 PostgreSQL 데이터를 연동해 조회·변경 작업을 처리했습니다.",
          "운영 환경에서 발생하는 오류와 권한·연결 예외를 점검했습니다.",
        ],
        result: [
          "Active Directory 계정·그룹 정책을 관리하는 기업용 기능 개발과 안정적인 운영 지원",
          "관리자 중심 대량 정보 조회·변경 UI 경험 확보",
        ],
        technologies: ["C#", "WinForms", "DevExpress", "PowerShell", "PostgreSQL", "Active Directory"],
      },
      {
        title: "ProcessWatchdog 솔루션 유지보수",
        context:
          "운영 중인 프로세스의 상태를 지속적으로 감시하고 이상 상황에 대응하는 모니터링 프로그램의 안정적인 유지보수가 필요했습니다.",
        work: [
          "C# 기반 프로세스 모니터링 기능과 기존 코드를 분석했습니다.",
          "오류 상황을 확인하고 기능 수정과 유지보수를 수행했습니다.",
          "운영 환경에서 프로세스 상태를 안정적으로 확인할 수 있도록 예외를 점검했습니다.",
        ],
        result: ["프로세스 모니터링 솔루션의 지속적인 운영과 유지보수 지원"],
        technologies: ["C#", ".NET", "Process Monitoring", "Maintenance"],
      },
      {
        title: "모듈 통합 설치 프로그램",
        context:
          "연관된 여러 모듈을 각각 설치해야 해 배포와 설치 과정이 복잡했습니다.",
        work: [
          "모듈 간 설치 순서와 의존 관계를 분석했습니다.",
          "NSIS .nsi 스크립트를 작성해 여러 모듈을 하나의 Setup 프로그램으로 통합했습니다.",
          "설치·삭제·업데이트와 오류 상황을 점검했습니다.",
        ],
        result: ["여러 모듈을 하나의 설치 과정으로 통합해 배포와 설치 작업 단순화"],
        technologies: ["NSIS", ".nsi Script", "Windows Installer", "Packaging"],
      },
    ],
    technologies: ["C#", "WinForms", "DevExpress", "PowerShell", "PostgreSQL", "Active Directory", "NSIS"],
  },
  {
    id: "handy-his",
    order: 4,
    company: "핸디에이치아이에스",
    period: "2018.06 — 2018.11",
    role: "선임연구원 · DZ 사업부",
    domain: ["Document Viewer", "Document Security", "File Conversion", "Mail Attachment"],
    overview:
      "C# 기반 문서 뷰어와 메일 첨부파일 변환 시스템을 개발했습니다. PDF 보안 기능, Office·HTML·텍스트 파일의 이미지 변환과 다양한 압축 형식의 해제·재압축 과정을 구현했습니다.",
    responsibilities: [
      "사내 시스템용 문서 뷰어와 PDF 열람 기능 개발",
      "PDF 워터마크 표시와 단축키 제한 등 문서 보안 기능 구현",
      "메일 첨부 문서를 JPG 이미지로 변환하고 ZIP으로 압축하는 처리 기능 개발",
      "암호 설정 문서와 ZIP·ARZ·RAR 압축파일 해제·변환·재압축 처리",
      "다양한 문서·압축 형식의 오류와 호환성 대응",
    ],
    projects: [
      {
        title: "TOSS · LGU+ 사내 문서 뷰어",
        context:
          "사내 시스템에서 PDF 문서를 열람할 때 사용자 식별 정보 표시와 제한된 조작 환경이 필요했습니다.",
        work: [
          "C#과 JavaScript를 이용해 사내 시스템 문서 뷰어를 개발했습니다.",
          "PDF 화면에 워터마크를 추가했습니다.",
          "문서 보안을 위해 지정된 단축키 사용을 제한했습니다.",
          "뷰어 동작과 문서 로딩 과정의 예외를 처리했습니다.",
        ],
        result: ["사내 문서 열람 환경에 워터마크와 조작 제한 기능 제공"],
        technologies: ["C#", "JavaScript", "PDF Viewer", "Watermark", "Document Security"],
      },
      {
        title: "미래과학아카데미 메일 첨부파일 뷰어",
        context:
          "메일에 첨부된 다양한 문서와 압축파일을 별도 프로그램 없이 이미지 형태로 열람할 수 있는 변환 과정이 필요했습니다.",
        work: [
          "PDF·PPT·Word·Excel·HTML·TXT와 암호 설정 파일을 JPG로 변환한 뒤 ZIP으로 압축했습니다.",
          "ZIP·ARZ·RAR 첨부파일은 압축을 해제하고 내부 폴더와 파일을 JPG로 변환한 뒤 다시 압축했습니다.",
          "문서 형식, 암호 여부, 압축 내부 구조와 변환 실패 상황을 처리했습니다.",
        ],
        result: ["다양한 문서와 압축 형식을 이미지 기반으로 열람할 수 있는 첨부파일 처리 기능 제공"],
        technologies: ["C#", "Office File Conversion", "PDF", "ZIP", "ARZ", "RAR", "Image Processing"],
      },
    ],
    technologies: ["C#", "JavaScript", ".NET", "PDF Viewer", "Document Security", "File Conversion", "Archive Handling"],
  },
  {
    id: "standard-chartered",
    order: 5,
    company: "한국스탠다드차타드은행",
    period: "2017.09 — 2017.11",
    role: "프리랜서 대리 · 여신관리부",
    domain: ["Banking", "Loan Management", "Data Management", "Excel Automation"],
    overview:
      "여신관리부에서 여신 거래내역 데이터를 처리하고 관리했습니다. Excel 도구 개발과 Oracle 데이터베이스 입력·편집을 담당하며 업무 데이터의 정확한 유지보수를 지원했습니다.",
    responsibilities: [
      "여신 건별 거래내역 데이터 처리와 유지보수",
      "업무용 Excel 파일과 데이터 처리 기능 개발",
      "Oracle 데이터베이스 입력·편집",
      "대량 업무 데이터 정리와 검증",
    ],
    projects: [
      {
        title: "여신관리부 메인 데이터 관리",
        context:
          "여신 건의 거래내역을 정확하게 입력·정리하고 부서 업무에 맞게 지속적으로 유지해야 했습니다.",
        work: [
          "SQL과 Oracle을 이용해 여신 거래 데이터를 입력하고 편집했습니다.",
          "반복 데이터 작업을 지원하는 Excel 기능을 개발했습니다.",
          "업무 데이터의 누락과 오류를 확인하며 정리·유지보수했습니다.",
        ],
        result: ["여신 거래 데이터의 입력·편집과 반복 업무를 지원하는 데이터 관리 환경 운영"],
        technologies: ["SQL", "Oracle", "Excel", "Data Management"],
      },
    ],
    technologies: ["SQL", "Oracle", "Excel", "Data Processing", "Data Maintenance"],
  },
  {
    id: "finger",
    order: 6,
    company: "핑거",
    period: "2016.04 — 2017.08",
    role: "사원 · 시너지사업부",
    domain: ["Finance", "Asset Management", "Scraping", "Customer Support"],
    overview:
      "금융기관·카드사·증권사 등 여러 기관의 데이터를 연결하는 자산관리 서비스와 계좌관리 솔루션을 개발·유지보수했습니다. 스크래핑 스크립트, 고객지원, 솔루션 관리와 웹·앱 기획 업무도 함께 담당했습니다.",
    responsibilities: [
      "C++·JavaScript 기반 금융 자산관리 서비스 개발과 유지보수",
      "은행·카드·증권사 등 외부 기관 데이터를 연결하는 계좌통합 기능 개발",
      "은행·카드·통신사·증권사·공공기관의 조회·처리 스크래핑 스크립트 작성",
      "myFingerCM 계좌관리 솔루션 관리와 고객사 지원",
      "SQL·Oracle 데이터 처리와 운영 오류 대응",
      "스크래핑 솔루션 관리, 고객지원과 웹·앱 기획 업무 참여",
    ],
    projects: [
      {
        title: "신한은행 머니멘토",
        context:
          "고객 명의의 은행·카드·증권사 계좌와 자산을 한 화면에서 관리할 수 있는 자산관리 서비스가 필요했습니다.",
        work: [
          "C++과 JavaScript로 금융기관 데이터 연동과 자산 조회 기능을 개발했습니다.",
          "기관별 데이터 형식과 오류 상황에 맞춰 연동 로직을 유지보수했습니다.",
          "운영 중 발생한 고객 문의와 데이터 오류를 분석하고 대응했습니다.",
        ],
        result: ["여러 금융기관의 자산 정보를 통합 조회하는 서비스 개발·유지보수"],
        technologies: ["C++", "JavaScript", "Financial Data", "Asset Management"],
      },
      {
        title: "국민은행 가계부",
        context:
          "고객의 은행·카드·증권사 거래와 자산을 통합해 가계부와 자산관리 기능으로 제공해야 했습니다.",
        work: [
          "C++과 JavaScript 기반 계좌·거래 데이터 조회 기능을 개발했습니다.",
          "외부 기관별 연동 스크립트와 서비스 기능을 유지보수했습니다.",
          "조회 실패와 데이터 형식 차이를 처리했습니다.",
        ],
        result: ["다기관 금융 데이터를 이용한 자산관리·가계부 서비스 운영 지원"],
        technologies: ["C++", "JavaScript", "Financial Data", "Account Integration"],
      },
      {
        title: "myFingerCM 계좌관리 솔루션",
        context:
          "기업 고객이 여러 은행·카드사·증권사 계좌를 통합 관리할 수 있는 솔루션이 필요했습니다.",
        work: [
          "계좌와 자산 정보를 통합 조회하는 솔루션을 개발하고 유지보수했습니다.",
          "신한카드 자금팀, 현대캐피탈·현대카드와 여행사 등 고객사의 운영 요청을 지원했습니다.",
          "기관별 데이터 연동, 오류 처리와 고객지원 업무를 수행했습니다.",
        ],
        result: ["금융·기업 고객이 여러 기관의 계좌를 관리할 수 있는 솔루션 운영과 고객지원"],
        technologies: ["C++", "JavaScript", "C#", "SQL", "Oracle", "Customer Support"],
      },
      {
        title: "스크래핑 솔루션 개발·유지보수",
        context:
          "은행·카드·통신사·증권사·공공기관마다 조회 방식과 처리 조건이 달라 기관별 스크립트를 지속적으로 개발·관리해야 했습니다.",
        work: [
          "기관별 조회와 처리 기능을 자체 개발 도구의 JavaScript 스크립트로 작성했습니다.",
          "스크립트 결과를 계좌관리 프로그램과 고객사 시스템에 연결했습니다.",
          "기관 사이트 변경, 조회 실패와 예외 상황에 맞춰 스크립트를 유지보수했습니다.",
        ],
        result: ["여러 외부 기관의 데이터를 계좌관리 프로그램과 연동하는 스크래핑 기능 개발·운영"],
        technologies: ["JavaScript", "Scraping", "Internal Tool", "System Integration", "Maintenance"],
      },
    ],
    technologies: ["C++", "JavaScript", "C#", "SQL", "Oracle", "Scraping", "Asset Management", "Customer Support", "Web/App Planning"],
  },
];
