import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { askEunItems } from "../data/askEun";

const AskEunSection = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleSectionToggle = () => {
    setIsSectionOpen((currentState) => {
      const nextState = !currentState;

      if (!nextState) {
        setOpenItemId(null);
      }

      return nextState;
    });
  };

  const handleItemToggle = (id: string) => {
    setOpenItemId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="ask-eun-section" id="ask-eun">
      <SectionHeader
        eyebrow="Ask Me"
        title="궁금한 내용을 질문처럼 열어볼 수 있어요"
        description={`이력서에 담긴 프로젝트 경험과 일하는 방식을 질문과 답변 형식으로 조금 더 자세하게 풀어냈습니다.`}
      />

      <div className="ask-eun-section__actions">
        <button
          type="button"
          className="pill-button pill-button--primary"
          onClick={handleSectionToggle}
          aria-expanded={isSectionOpen}
          aria-controls="ask-eun-question-list"
        >
          {isSectionOpen ? "Hide Questions" : "View Questions"}
        </button>
      </div>
      <div
        id="ask-eun-question-list"
        className={`ask-eun-section__content ${
          isSectionOpen ? "ask-eun-section__content--open" : ""
        }`}
      >
        <div className="ask-eun-section__content-inner">
          <div className="ask-eun-list">
            {askEunItems.map((item) => {
              const isOpen = openItemId === item.id;
              const answerId = `ask-eun-answer-${item.id}`;

              return (
                <article
                  key={item.id}
                  className={`ask-eun-card ${
                    isOpen ? "ask-eun-card--open" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="ask-eun-card__question"
                    onClick={() => handleItemToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <div>
                      <span>Question</span>
                      <h3>{item.question}</h3>
                    </div>

                    <em aria-hidden="true">{isOpen ? "−" : "+"}</em>
                  </button>

                  <div className="ask-eun-card__tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div
                    id={answerId}
                    className={`ask-eun-card__answer-wrap ${
                      isOpen ? "ask-eun-card__answer-wrap--open" : ""
                    }`}
                  >
                    <div className="ask-eun-card__answer-inner">
                      <div className="ask-eun-card__answer">
                        <span className="ask-eun-card__label">Answer</span>

                        {item.answer.map((paragraph, index) => (
                          <p key={`${item.id}-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskEunSection;
