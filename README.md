# Eun Portfolio

8년 이상의 제품 UI 개발 경험과 React 기반 서비스·기능형 프로토타입을 정리한 프론트엔드 개발자 은정안의 포트폴리오입니다.

## Live Demo

[포트폴리오 보기](https://coffee-and.github.io/eun-portfolio/)

## 핵심 메시지

- WPF 기반 대규모 제품 UI 경험을 React 웹 서비스와 크로스플랫폼 프로젝트로 확장했습니다.
- Moment ON과 Moment Play는 계정·저장·콘텐츠 또는 게임 흐름을 포함한 핵심 서비스 구현을 완료했습니다.
- 두 대표 서비스에서 실제 결제 또는 수익화 시스템은 아직 연결하지 않았으며, 완료 범위와 미연동 범위를 UI에서 구분합니다.
- Local Job Match, CoachHub, Classory와 Code Bridge는 역할별 사용자 흐름과 상태 변화를 구현한 Mock Data 기반 Functional Prototype입니다.
- 네 기능형 프로토타입의 전체 흐름은 YouTube 데모로 공개했습니다.

## Featured Projects

### Moment ON

사주·타로·관계분석·함께 질문·다이어리·캘린더를 하나의 감성 콘텐츠 허브로 연결한 React·Supabase 기반 서비스입니다.

- 상태: **핵심 서비스 구현 완료**
- 현재 범위: **결제 연동 예정**
- 구현: 회원·비회원 저장, Supabase 인증, 결과 다시 보기, PNG·PDF 리포트, 관리자 콘텐츠 관리, 저장 데이터 검증
- [View Site](https://moment-on.vercel.app/)
- 저장소: Private Repository · Source available on request

### Moment Play

2048, Memory Sequence, Sudoku, Omok 등 14종 미니게임과 랭킹·친구·초대 흐름을 제공하는 React·Supabase 기반 게임 서비스입니다.

- 상태: **핵심 서비스 구현 완료**
- 현재 범위: **결제·수익화 연동 예정**
- 구현: 14종 게임, 키보드·터치 입력, 기록, 랭킹, 인증·온보딩, 친구, 오목 초대·알림, 테마·오디오
- 기반 언어: JavaScript
- [View Site](https://coffee-and.github.io/moment-play/)
- [GitHub](https://github.com/coffee-and/moment-play)

## Functional Prototypes & YouTube Demos

아래 프로젝트는 실제 인증과 운영 데이터베이스가 연결된 상용 서비스가 아니라, 역할별 전체 사용자 흐름을 확인할 수 있는 기능형 프로토타입입니다.

| 프로젝트 | 구현 범위 | Demo |
| --- | --- | --- |
| Local Job Match | 구직자·고용주 모바일 앱과 운영 관리자 웹을 연결한 채용 흐름 | [YouTube](https://youtu.be/KdzZpGbRIEc) |
| CoachHub | 관리자·PM·코치·참여자의 목표·실행·피드백·성과 흐름 | [YouTube](https://youtu.be/i5ytN54c1AE) |
| Classory | 원장·관리자·강사·학부모·학생의 학원 운영 흐름 | [YouTube](https://youtu.be/cjDAYArjCys) |
| Code Bridge | 블록·JavaScript 코드·도형 실행 결과를 연결한 코딩 학습 흐름 | [YouTube](https://youtu.be/pV1YFJQPUEg) |

## Earlier Work

### News Monitor

Guardian API를 활용해 AI와 기술 뉴스를 검색하고 북마크와 최근 본 기사를 LocalStorage에 유지하는 React 웹앱입니다.

- 상태: **Released Project / Earlier Work**
- [View Site](https://coffee-and.github.io/news-monitor/)
- [GitHub](https://github.com/coffee-and/news-monitor)

## 주요 구현 내용

1. `src/data/projects.ts`를 프로젝트 정보의 단일 소스로 사용합니다. 메인 프로젝트 카드, Development Logs와 웹 이력서가 동일한 상태·설명·링크를 사용합니다.
2. 대표 서비스의 `statusLabel`과 `scopeLabel`을 분리해 구현 완료 범위와 결제·수익화 미연동 범위를 함께 표시합니다.
3. YouTube iframe을 초기 로드하지 않고 16:9 썸네일 카드를 렌더링합니다. 고해상도 썸네일 실패 시 `hqdefault`로 한 번 fallback합니다.
4. 네 기능형 프로토타입을 프로젝트 데이터와 YouTube 데이터로 연결하고 영상 링크를 주요 CTA로 사용합니다.
5. 기존 `#/resume` 해시 라우팅을 유지하면서 최신 7개 프로젝트를 같은 데이터에서 변환해 렌더링합니다.
6. 외부 링크는 새 탭, `noopener noreferrer`와 목적이 드러나는 `aria-label`을 사용합니다.
7. 데스크톱·태블릿·모바일 레이아웃, `focus-visible`과 `prefers-reduced-motion`을 지원합니다.

## 기술 스택

### Portfolio

- React 19
- TypeScript
- Vite
- CSS
- ESLint
- npm
- GitHub Pages

### Project Experience

- Frontend & Platform: WPF, C#, React, TypeScript, JavaScript, React Native, Expo
- State & Interaction: MVVM, React Router, Zustand, dnd-kit, Konva
- Data: Supabase, PostgreSQL, LocalStorage, REST API
- Quality & Delivery: Vitest, React Testing Library, Playwright, GitHub Actions, npm workspaces, pnpm monorepo, Capacitor

## 프로젝트 구조

```text
src/
├── components/
│   ├── AboutSection.tsx
│   ├── AskEunSection.tsx
│   ├── CareerHighlightsSection.tsx
│   ├── ContactSection.tsx
│   ├── ExternalLink.tsx
│   ├── Hero.tsx
│   ├── ProjectsSection.tsx
│   ├── ResumeSection.tsx
│   ├── SectionHeader.tsx
│   ├── SiteNav.tsx
│   ├── SkillsSection.tsx
│   ├── YouTubeSection.tsx
│   └── YouTubeThumbnail.tsx
├── data/
│   ├── askEun.ts
│   ├── projects.ts
│   ├── resume.ts
│   └── youtubeVideos.ts
├── styles/
│   ├── global.css
│   ├── projects.css
│   ├── resume-icons.css
│   ├── resume.css
│   └── youtube.css
├── utils/
│   └── youtube.ts
├── App.tsx
└── main.tsx

public/
├── icons/
├── projects/
├── resume/
├── eun-icon.svg
└── resume.pdf
```

## 로컬 실행

```bash
git clone https://github.com/coffee-and/eun-portfolio.git
cd eun-portfolio
npm ci
npm run dev
```

## 검증

```bash
npm run lint
npm run build
npm run preview
```

## 배포

```bash
npm run deploy
```

`predeploy`가 프로덕션 빌드를 생성한 뒤 `dist` 디렉터리를 GitHub Pages에 배포합니다.

## 링크

- [Live Demo](https://coffee-and.github.io/eun-portfolio/)
- [GitHub](https://github.com/coffee-and)
- [YouTube Development Logs](https://www.youtube.com/channel/UCpxd-LVHF2ImmVCxRpSx2SA)
