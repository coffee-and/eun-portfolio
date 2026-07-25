import { useMemo, useState } from "react";
import {
  askEunCategories,
  askEunItems,
  type AskEunCategoryId,
} from "../data/askEun";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

const AskEunSection = () => {
  const [activeCategory, setActiveCategory] =
    useState<AskEunCategoryId>("positioning");
  const [activeQuestionId, setActiveQuestionId] = useState("profile");

  const categoryQuestions = useMemo(
    () => askEunItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const activeQuestion =
    askEunItems.find((item) => item.id === activeQuestionId) ??
    categoryQuestions[0];

  const handleCategoryChange = (categoryId: AskEunCategoryId) => {
    const firstQuestion = askEunItems.find(
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
        eyebrow="Ask Eun"
        title="궁금한 질문을 골라 경력과 프로젝트를 살펴보세요"
        description="독립 프로젝트 Ask Eun의 질문형 탐색 방식을 현재 경력과 풀스택 프로젝트에 맞게 다시 구성했습니다."
      />

      <div className="ask-eun-explorer">
        <nav className="ask-eun-categories" aria-label="Ask Eun 질문 카테고리">
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
              {activeQuestion.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
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
