import SectionHeader from "./SectionHeader";
import ExternalLink from "./ExternalLink";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="contact me"
        description="복잡한 제품과 업무 흐름을 이해하기 쉬운 사용자 경험으로 구조화하고, 실제로 동작하는 서비스 형태까지 구현합니다."
      />

      <div className="contact-actions">
        <a
          className="pill-button pill-button--primary"
          href="mailto:annn@kakao.com"
          aria-label="은정안에게 이메일 보내기"
        >
          email
        </a>
        <ExternalLink
          className="pill-button"
          href="https://github.com/coffee-and"
          ariaLabel="은정안 GitHub 프로필 새 탭에서 열기"
        >
          github
        </ExternalLink>
        <ExternalLink
          className="pill-button"
          href="https://www.youtube.com/channel/UCpxd-LVHF2ImmVCxRpSx2SA"
          ariaLabel="은정안 YouTube 개발 기록 채널 새 탭에서 열기"
        >
          YouTube
        </ExternalLink>
        <a className="pill-button" href="#/resume">web resume</a>
      </div>
    </section>
  );
};

export default ContactSection;
