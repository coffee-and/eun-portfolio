import { youtubeVideos } from "../data/youtubeVideos";
import "../styles/youtube.css";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";
import YouTubeThumbnail from "./YouTubeThumbnail";

const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UCpxd-LVHF2ImmVCxRpSx2SA";

const YouTubeSection = () => (
  <section className="youtube-section" id="videos">
    <SectionHeader
      eyebrow="Development Logs"
      title="영상으로 확인하는 구현 결과"
      description="완성 화면만 나열하지 않고, 역할별 사용자 흐름과 핵심 기능이 실제로 어떻게 이어지는지 데모 영상으로 기록했습니다."
    />

    <div className="youtube-grid">
      {youtubeVideos.map((video) => (
        <article className="youtube-card" key={video.id}>
          <ExternalLink
            className="youtube-card__visual"
            href={video.youtubeUrl}
            ariaLabel={`${video.koreanTitle ?? video.title} 프로젝트 데모 영상 YouTube에서 새 탭으로 보기`}
          >
            <YouTubeThumbnail
              videoId={video.youtubeId}
              alt={`${video.koreanTitle ?? video.title} 프로젝트 YouTube 데모 영상 썸네일`}
            />
            <span className="youtube-card__play" aria-hidden="true">
              <span>▶</span>
              watch demo
            </span>
          </ExternalLink>

          <div className="youtube-card__body">
            <span className="youtube-card__korean-title">
              {video.koreanTitle}
            </span>
            <h3>{video.title}</h3>
            <p className="youtube-card__status">
              <strong>{video.statusLabel}</strong>
              <span>역할별 전체 사용자 흐름 구현</span>
            </p>
            <p>{video.description}</p>

            <ul className="youtube-card__features" aria-label="대표 기능">
              {video.cardHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="youtube-card__stack" aria-label="핵심 기술">
              {video.stack.slice(0, 4).map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="youtube-card__scope">
              <strong>현재 범위</strong>
              <p>{video.scopeNote}</p>
            </div>

            <ExternalLink
              className="youtube-card__link"
              href={video.youtubeUrl}
              ariaLabel={`${video.koreanTitle ?? video.title} 프로젝트 데모 영상 YouTube에서 새 탭으로 보기`}
            >
              YouTube에서 영상 보기
            </ExternalLink>
          </div>
        </article>
      ))}
    </div>

    <div className="youtube-channel-cta">
      <div>
        <span>4 functional prototypes</span>
        <p>프로젝트별 전체 사용자 흐름을 채널에서 이어서 볼 수 있습니다.</p>
      </div>
      <ExternalLink
        className="pill-button pill-button--primary"
        href={YOUTUBE_CHANNEL_URL}
        ariaLabel="은정안 YouTube 채널의 전체 개발 기록 새 탭에서 보기"
      >
        YouTube에서 전체 개발 기록 보기
      </ExternalLink>
    </div>
  </section>
);

export default YouTubeSection;
