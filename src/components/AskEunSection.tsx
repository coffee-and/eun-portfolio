import { useMemo, useState } from "react";
import {
  askEunCategories,
  askEunItems,
  type AskEunCategoryId,
  type AskEunItem,
} from "../data/askEun";
import { careerCards } from "../data/resume";
import { normalizeCompanyNames } from "../utils/companyNames";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

const careerOverviewQuestion: AskEunItem = {
  id: "career-overview",
  category: "career",
  question: "전체 경력을 회사별로 소개해주세요.",
  summary: `${careerCards.length}개의 경력에서 제품 개발, 데이터 처리, 운영과 기술 콘텐츠 제작을 경험했습니다.`,
  answer: careerCards.map(
    (career) => `${career.title} (${career.period}) — ${career.description}`,
  ),
  relatedLinks: [{ label: "회사별 상세 경력", href: "#career" }],
};

const companyCareerQuestions: AskEunItem[] = careerCards
  .filter((career) => career.id !== "cognex")
  .map((career) => ({
    id: `career-${career.id}`,
    category: "career" as const,
    question: `${career.title}에서는 무엇을 했나요?`,
    summary: career.description,
    answer: [
      ...career.highlights.map(
        (highlight) => `${highlight.title} — ${highlight.description}`,
      ),
      `사용 기술 — ${career.tags.join(" · ")}`,
    ],
    relatedLinks: [
      { label: `${career.title} 상세 보기`, href: `#career-${career.id}` },
    ],
  }));

const collaborationCopy = {
  question: "왜 정안님과 함께 일해야 하나요?",
  summary:
    "기획 의도를 빠르게 구조화하고 화면·데이터·검증·배포까지 연결해 실제 결과물로 완성합니다.",
  answer: [
    "금융·기업용 솔루션과 AI 머신비전 플랫폼에서 복잡한 제품을 개발하고 장기간 유지하며, 요구사항을 안정적인 제품 구조로 옮겨왔습니다.",
    "프로젝트를 맡으면 화면만 만드는 데 그치지 않고 사용자 작업, 데이터 처리, 오류 조건, 테스트와 배포까지 함께 정리합니다.",
    "기획·디자인·개발을 분리해서 보지 않아 초기 아이디어를 화면과 기능으로 빠르게 구체화하고, 기존 서비스는 문제의 원인을 찾아 구조적으로 개선할 수 있습니다.",
    "협업 범위와 일정, 구현한 내용과 남은 과제를 명확하게 공유해 프리랜서 프로젝트에서도 결과와 다음 판단이 남도록 작업합니다.",
  ],
};

const normalizedAskEunItems = askEunItems.map((item) => {
  const sourceItem =
    item.id === "why-hire"
      ? {
          ...item,
          ...collaborationCopy,
        }
      : item;

  return {
    ...sourceItem,
    question: normalizeCompanyNames(sourceItem.question),
    summary: normalizeCompanyNames(sourceItem.summary),
    answer: sourceItem.answer.map(normalizeCompanyNames),
    relatedLinks: sourceItem.relatedLinks?.map((link) => ({
      ...link,
      label: normalizeCompanyNames(link.label),
    })),
  };
});

const currentAskEunItems = normalizedAskEunItems.flatMap((item) => {
  if (item.id === "career-overview") {
    return [careerOverviewQuestion];
  }

  if (item.id === "early-career") {
    return companyCareerQuestions;
  }

  return [item];
});

const AskEunSection = () => {
  const [activeCategory, setActiveCategory] =
    useState<AskEunCategoryId>("positioning");
  const [activeQuestionId, setActiveQuestionId] = useState("profile");

  const categoryQuestions = useMemo(
    () => currentAskEunItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const activeQuestion =
    currentAskEunItems.find((item) => item.id === activeQuestionId) ??
    categoryQuestions[0];

  const handleCategoryChange = (categoryId: AskEunCategoryId) => {
    const firstQuestion = currentAskEunItems.find(
      (item) => item.category === categoryId,
    );

    setActiveCategory(categoryId);
    if (firstQuestion) {
      setActiveQuestionId(firstQuestion.id);
    }
  };

  return (
    <section className="ask-eun-editorial" id="ask-eun">
      <SectionHeader
        eyebrow="About"
        title="궁금한 질문을 골라 경력과 프로젝트를 살펴보세요"
      />

      <div className="ask-eun-explorer">
        <nav className="ask-eun-categories" aria-label="About 질문 카테고리">
          {askEunCategories.map((category, index) => (
            <button
              type="button"
              key={category.id}
              className={
                activeCategory === category.id
                  ? "ask-eun-category ask-eun-category--active"
                  : "ask-eun-category"
              }
              onClick={() => handleCategoryChange(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{category.label}</strong>
              <em>{category.description}</em>
            </button>
          ))}
        </nav>

        <div className="ask-eun-questions" aria-label="질문 목록">
          <p>Questions</p>
          {categoryQuestions.map((item) => (
            <button
              type="button"
              key={item.id}
              className={
                activeQuestion?.id === item.id
                  ? "ask-eun-question ask-eun-question--active"
                  : "ask-eun-question"
              }
              onClick={() => setActiveQuestionId(item.id)}
              aria-pressed={activeQuestion?.id === item.id}
            >
              <span aria-hidden="true" />
              {item.question}
            </button>
          ))}
        </div>

        {activeQuestion && (
          <article className="ask-eun-answer" aria-live="polite">
            <span>Answer</span>
            <h3>{activeQuestion.question}</h3>
            <strong>{activeQuestion.summary}</strong>

            <div className="ask-eun-answer__copy">
              {activeQuestion.answer.map((paragraph, index) => (
                <p key={`${activeQuestion.id}-${index}`}>{paragraph}</p>
              ))}
            </div>

            {activeQuestion.relatedLinks && (
              <div className="ask-eun-answer__links">
                {activeQuestion.relatedLinks.map((link) =>
                  link.href.startsWith("http") ? (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      ariaLabel={`${link.label} 새 탭에서 열기`}
                    >
                      {link.label}
                    </ExternalLink>
                  ) : (
                    <a key={link.href} href={link.href}>
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            )}
          </article>
        )}
      </div>
    </section>
  );
};

export default AskEunSection;
