import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="contact me"
        description={`사용자의 흐름을 이해하고 제품의 구조를 개선하며,
안정적으로 구현하는 프론트엔드 개발자로 새로운 기회를 기다리고 있습니다.`}
      />

      <div className="contact-actions">
        <a className="pill-button pill-button--primary" href="mailto:annn@kakao.com">email</a>
        <a className="pill-button" href="https://github.com/coffee-and" target="_blank" rel="noreferrer">github</a>
        <a className="pill-button" href="#/resume">web resume</a>
      </div>
    </section>
  );
};

export default ContactSection;
