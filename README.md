# Eun Portfolio

> WPF 기반 제품 개발 경험과 React 웹 프로젝트를 한곳에 정리한 프론트엔드 개발자 은정안의 포트폴리오입니다.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Portfolio-6C63FF?style=for-the-badge)](https://coffee-and.github.io/eun-portfolio/)

## 프로젝트 소개

**Eun Portfolio**는 데스크톱 애플리케이션에서 쌓은 UI 개발 경험과 React 기반 웹 프론트엔드 프로젝트를 함께 보여주기 위해 제작한 개인 포트폴리오입니다.

단순한 기술 목록보다 실제 업무에서 어떤 문제를 발견하고 어떻게 개선했는지, 개인 프로젝트를 어떤 구조로 설계하고 구현했는지를 중심으로 구성했습니다.

## 주요 섹션

- **Hero**: 개발 방향과 핵심 역량 소개
- **About**: WPF에서 React로 확장한 경험과 업무 관점
- **Ask Eun**: 질문을 선택해 경력과 프로젝트를 확인하는 인터랙티브 영역
- **Skills**: Frontend, Architecture, API, DevOps 역량 분류
- **Career Highlights**: 실무 문제 해결 경험과 주요 성과
- **Projects**: 직접 기획·개발·배포한 웹 프로젝트 소개
- **Contact**: 이력서, GitHub 및 연락 수단 제공

## 주요 구현 내용

### 1. 섹션 단위 컴포넌트 설계

각 콘텐츠 영역을 독립적인 React 컴포넌트로 분리했습니다. 섹션별 책임을 명확하게 나누어 콘텐츠 수정과 레이아웃 유지보수가 쉽도록 구성했습니다.

### 2. 프로젝트 데이터 분리

프로젝트명, 설명, 기술 스택, 배포 주소와 GitHub 주소를 데이터 파일에서 관리합니다. 프로젝트 카드의 마크업을 반복 작성하지 않고 동일한 구조로 렌더링할 수 있도록 설계했습니다.

### 3. 인터랙티브 포트폴리오 구성

방문자가 질문을 선택하며 경력과 업무 방식을 확인할 수 있는 `Ask Eun` 영역을 포함했습니다. 정적인 이력 나열보다 사용자가 필요한 정보를 직접 탐색할 수 있도록 했습니다.

### 4. 반응형 레이아웃

데스크톱과 모바일 환경에서 정보의 우선순위가 유지되도록 카드, 텍스트, 버튼과 프로젝트 이미지 배치를 조정했습니다.

### 5. 정적 배포 자동화

Vite로 프로덕션 빌드를 생성하고 `gh-pages` 패키지를 통해 GitHub Pages에 배포하도록 스크립트를 구성했습니다.

## 소개 프로젝트

### Relationship Analyzer

질문 응답을 바탕으로 관계의 감정 상태, 안정성, 갈등 패턴과 미래 정렬도를 분석하는 웹서비스입니다.

- 카테고리별 점수 및 위험도 계산
- 대표 갈등 유형 분석
- 맞춤형 결과 리포트
- 결과 이미지 저장 및 공유

[Live Demo](https://coffee-and.github.io/relationship-analyzer/) · [Repository](https://github.com/coffee-and/relationship-analyzer)

### Tech Radar

Guardian Open Platform API를 활용해 AI·기술 뉴스를 검색하고 관심 기사를 관리하는 뉴스 모니터링 웹앱입니다.

- 키워드 검색 및 카테고리 필터
- 북마크와 최근 본 기사 관리
- LocalStorage 기반 사용자 데이터 유지
- 로딩·오류 상태 처리

[Live Demo](https://coffee-and.github.io/news-monitor/) · [Repository](https://github.com/coffee-and/news-monitor)

### Ask Eun

경력과 프로젝트 경험을 질문과 답변 형태로 탐색할 수 있는 대화형 포트폴리오입니다.

- 질문 선택형 대화 UI
- 답변 자동 스크롤
- 선택 상태 및 대화 초기화
- 이력서 PDF 연결

[Live Demo](https://coffee-and.github.io/ask-eun/) · [Repository](https://github.com/coffee-and/ask-eun)

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Frontend | React, TypeScript |
| Build | Vite, TypeScript Compiler |
| Styling | CSS |
| Deployment | GitHub Pages, gh-pages |
| Quality | ESLint |

## 프로젝트 구조

```text
src/
├── components/
│   ├── AboutSection.tsx
│   ├── AskEunSection.tsx
│   ├── CareerHighlightsSection.tsx
│   ├── ContactSection.tsx
│   ├── Hero.tsx
│   ├── ProjectsSection.tsx
│   ├── SectionHeader.tsx
│   └── SkillsSection.tsx
├── data/
│   └── projects.ts
├── App.tsx
├── main.tsx
└── index.css

public/
├── projects/
├── resume.pdf
└── eun-icon.svg
```

## 실행 방법

```bash
git clone https://github.com/coffee-and/eun-portfolio.git
cd eun-portfolio
npm install
npm run dev
```

프로덕션 빌드는 다음 명령어로 확인할 수 있습니다.

```bash
npm run build
npm run preview
```

## 배포

```bash
npm run deploy
```

`predeploy` 스크립트가 먼저 프로덕션 빌드를 실행한 뒤 `dist` 디렉터리를 GitHub Pages에 배포합니다.

## 링크

- [Live Demo](https://coffee-and.github.io/eun-portfolio/)
- [GitHub Repository](https://github.com/coffee-and/eun-portfolio)
- [Interactive Portfolio](https://coffee-and.github.io/ask-eun/)
