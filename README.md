# Eun Portfolio

> 제품의 사용성과 기술 구조를 함께 설계하고, 화면부터 데이터와 배포까지 연결해 실제 제품으로 완성하는 풀스택 개발자 은정안의 포트폴리오입니다.

## Live Demo

[포트폴리오 보기](https://coffee-and.github.io/eun-portfolio/)

## 소개

8년 이상의 제품 UI 개발 경험을 기반으로 금융 서비스, 기업용 솔루션과 AI 머신비전 플랫폼을 개발했습니다. 최근에는 React·TypeScript·Supabase를 이용해 화면 구성, 인증, 사용자별 데이터 저장, 검증, 테스트와 배포까지 직접 연결한 서비스를 만들고 있습니다.

이번 개편은 단순한 카드형 프로젝트 목록을 벗어나 다음 두 가지를 함께 보여주는 것을 목표로 합니다.

1. 실제 화면과 영상으로 확인하는 프로젝트 구현 결과
2. 회사별 역할, 문제, 구현 방법과 결과를 생략하지 않은 경력 기록

## 디자인 방향

- 대형 프로젝트 화면과 16:9 영상 썸네일 중심의 쇼케이스
- 번호가 있는 에디토리얼 형식의 경력·기술·프로젝트 상세 설명
- 굵은 검은 왼쪽 세로선과 카드 안의 중첩 카드 제거
- 포트폴리오와 Web Resume에 동일한 공용 색상 토큰 적용
- 거의 블랙에 가까운 차콜을 제목과 본문에 사용하고, 저채도 와인은 작은 라벨·상태·선에만 제한적으로 사용

### Color palette

| 역할 | 색상 |
| --- | --- |
| White | `#FFFFFF` |
| Heading Charcoal | `#111214` |
| Body Charcoal | `#191B1E` |
| Secondary Charcoal | `#3F444A` |
| Muted Charcoal | `#70767D` |
| Wine Accent | `#76283B` |

색상은 `src/styles/shared-palette.css`에서 공용 토큰으로 관리하며 포트폴리오와 Web Resume가 같은 값을 상속합니다.

## Featured Services

### Moment ON

사주·타로·관계분석·함께 질문·다이어리·캘린더를 하나의 콘텐츠 플랫폼으로 구성한 React·Supabase 기반 서비스입니다.

- 상태: **핵심 서비스 구현 완료**
- 현재 범위: **결제 연동 예정**
- 구현: 회원·비회원 저장, Supabase 인증, 결과 다시 보기, PNG·PDF 리포트, 관리자 콘텐츠 관리, 저장 데이터 검증·복구
- [View Site](https://moment-on.vercel.app/)
- 저장소: Private Repository · Source available on request

### Moment Play

2048, Memory Sequence, Sudoku, Omok 등 14종 미니게임과 기록·랭킹·친구·초대를 제공하는 React·Supabase 기반 게임 서비스입니다.

- 상태: **핵심 서비스 구현 완료**
- 현재 범위: **결제·수익화 연동 예정**
- 구현: 14종 게임, 키보드·터치 입력, 결과 기록, 랭킹, 인증·온보딩, 친구, 오목 초대·알림, 테마·오디오
- 기반 언어: JavaScript
- [View Site](https://coffee-and.github.io/moment-play/)
- [GitHub](https://github.com/coffee-and/moment-play)

## Project Films

아래 프로젝트는 역할이 다른 사용자의 처음부터 끝까지의 작업 과정을 구현한 기능형 프로토타입입니다. 실제 인증과 운영 데이터베이스가 연결된 상용 서비스라고 과장하지 않고 현재 범위를 명확히 표시합니다.

| 프로젝트 | 구현 범위 | Demo |
| --- | --- | --- |
| Local Job Match | 구직자·고용주 모바일 앱과 운영 관리자 웹 | [YouTube](https://youtu.be/KdzZpGbRIEc) |
| CoachHub | 관리자·PM·코치·참여자의 목표·실행·피드백·성과 관리 | [YouTube](https://youtu.be/i5ytN54c1AE) |
| Classory | 원장·관리자·강사·학부모·학생의 학원 운영 기능 | [YouTube](https://youtu.be/Eo_wazZJFYc) |
| Code Bridge | 블록·JavaScript 코드·도형 실행 결과를 연결한 코딩 학습 | [YouTube](https://youtu.be/pV1YFJQPUEg) |

## Career

회사별 경력은 `src/data/careers.ts`에서 단일 데이터로 관리합니다.

- **코그넥스(구 수아랩), 2019.08—2024.06**  
  VPDL WPF·MVVM 제품 UI, VIDI·SuaKit·VPDL 통합, UI/UX 리뉴얼, WPF 디자인 체계, Migration·Easy UI Plugin, 사용자 작업 기록·Excel 리포트, TeamCity·AWS EC2·InstallShield·NSIS
- **아티프렌즈, 2025.04—2025.10**  
  블록체인 기술 콘텐츠, 기술 문서 작성·검수, 입문자 중심 설명 구성, 기술 입문 도서 집필 참여
- **퓨전데이타, 2018.11—2019.07**  
  Active Directory 관리 솔루션, DevExpress 기반 계정·조직 관리자 UI
- **핸디에이치아이에스 / 핑거, 2016.04—2018.11**  
  금융기관 데이터 연동, 계좌통합 서비스, 문서 보안, 파일 변환 시스템과 기업 환경의 예외 대응

## Skills

기술 이름만 나열하지 않고 사용 범위를 함께 표시합니다.

- Core Product Engineering
- Web & Cross-platform
- Backend & Data
- State & Interaction
- Quality & Delivery
- Collaboration & Design

각 기술은 `Professional Experience`, `Product Project`, `Functional Prototype`, `Supporting Tool`로 구분됩니다.

## Ask Eun

독립 프로젝트 [Ask Eun](https://coffee-and.github.io/ask-eun/)의 질문형 탐색 방식을 현재 경력과 프로젝트에 맞게 다시 구성했습니다.

- About & Positioning
- Career
- Full-stack & Architecture
- Projects
- Work Style

데스크톱에서는 카테고리, 질문 목록과 답변을 나란히 확인하며 모바일에서는 같은 정보 순서를 세로로 제공합니다. 답변 영역 전체를 따라가는 굵은 세로선은 사용하지 않습니다.

## Earlier Work

### News Monitor

Guardian API를 활용해 AI와 기술 뉴스를 검색하고 북마크와 최근 본 기사를 LocalStorage에 유지하는 React 웹앱입니다.

- 상태: **Released Project / Earlier Work**
- [View Site](https://coffee-and.github.io/news-monitor/)
- [GitHub](https://github.com/coffee-and/news-monitor)

## 데이터 구조

```text
src/data/
├── askEun.ts      # 질문 카테고리와 최신 경력·프로젝트 답변
├── careers.ts     # 회사별 역할, 프로젝트, 구현과 결과
├── projects.ts    # 대표 서비스·프로토타입·이전 작업
├── resume.ts      # 경력·프로젝트 데이터를 웹 이력서로 변환
├── skills.ts      # 기술과 실제 사용 근거
└── youtubeVideos.ts
```

Home, Career, Skills, Ask Eun과 Web Resume가 같은 데이터 원본을 사용해 설명과 상태가 서로 달라지지 않도록 구성했습니다.

## 기술 스택

- React 19
- TypeScript
- Vite
- CSS
- ESLint
- GitHub Pages

## 실행 방법

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
```

## 링크

- [Live Portfolio](https://coffee-and.github.io/eun-portfolio/)
- [GitHub](https://github.com/coffee-and)
- [YouTube](https://www.youtube.com/channel/UCpxd-LVHF2ImmVCxRpSx2SA)
- [Ask Eun](https://coffee-and.github.io/ask-eun/)
