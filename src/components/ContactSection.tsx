import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="제품의 사용성과 기술 구조를 함께 고민할 팀을 찾고 있습니다"
        description="복잡한 요구사항을 사용하기 좋은 화면과 안정적인 데이터 구조로 정리하고, 검증과 배포까지 책임지는 제품 중심 풀스택 개발자로 새로운 기회를 기다리고 있습니다."
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
        <a className="pill-button" href="#/resume">
          web resume
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
