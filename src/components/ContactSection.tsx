import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="제품 개발과 기획, 디자인 의뢰를 받고 있습니다"
        description="신규 제품 기획·개발부터 기존 서비스 기능·화면 개선까지, 목적과 범위에 맞춰 진행합니다."
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
