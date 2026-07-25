import { useMemo, useState } from "react";
import {
  askEunCategories,
  askEunItems,
  type AskEunCategoryId,
  type AskEunItem,
} from "../data/askEun";
import { careers } from "../data/careers";
import {
  getCompanyDisplayName,
  normalizeCompanyNames,
} from "../utils/companyNames";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

const careerOverviewQuestion: AskEunItem = {
  id: "career-overview",
  category: "career",
  question: "전체 경력을 회사별로 소개해주세요.",
  summary: `${careers.length}개의 경력에서 제품 개발, 데이터 처리, 운영과 기술 콘텐츠 제작을 경험했습니다.`,
  answer: careers.map(
    (career) =>
      `${getCompanyDisplayName(career)} (${career.period}) — ${career.overview}`,
  ),
  relatedLinks: [{ label: "회사별 상세 경력", href: "#career" }],
};

const companyCareerQuestions: AskEunItem[] = careers
  .filter((career) => career.id !== "cognex")
  .map((career) => {
    const companyName = getCompanyDisplayName(career);

    return {
      id: `career-${career.id}`,
      category: "career" as const,
      question: `${companyName}에서는 무엇을 했나요?`,
      summary: career.overview,
      answer: [
        career.overview,
        ...career.responsibilities,
        ...career.projects.flatMap((project) => [
          `${project.title} — ${project.context}`,
          ...project.work,
          ...project.result.map((result) => `${project.title} 결과 — ${result}`),
        ]),
      ],
      relatedLinks: [
        { label: `${companyName} 상세 보기`, href: `#career-${career.id}` },
      ],
    };
  });

const normalizedAskEunItems = askEunItems.map((item) => ({
  ...item,
  question: normalizeCompanyNames(item.question),
  summary: normalizeCompanyNames(item.summary),
  answer: item.answer.map(normalizeCompanyNames),
  relatedLinks: item.relatedLinks?.map((link) => ({
    ...link,
    label: normalizeCompanyNames(link.label),
  })),
}));

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
