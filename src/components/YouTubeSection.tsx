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
      eyebrow="Project Films"
      title="영상으로 확인하는 프로젝트"
      description="화면 이동, 기능 이용 순서와 상태 변화를 데스크톱·모바일 시연 영상으로 보여드립니다."
    />

    <div className="youtube-grid">
      {youtubeVideos.map((video, index) => (
        <article className="youtube-card" key={video.id}>
          <div className="youtube-card__index">
            {String(index + 1).padStart(2, "0")}
          </div>

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
              watch project film
            </span>
          </ExternalLink>

          <div className="youtube-card__body">
            <span className="youtube-card__korean-title">
              {video.koreanTitle}
            </span>
            <h3>{video.title}</h3>
            <p className="youtube-card__status">
              <strong>{video.statusLabel}</strong>
              <span>역할별 화면과 기능 시연</span>
            </p>
            <p>{video.description}</p>

            <ul className="youtube-card__features" aria-label="대표 기능">
              {video.cardHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <p className="youtube-card__stack">
              {video.stack.slice(0, 5).join(" · ")}
            </p>

            <div className="youtube-card__actions">
              <ExternalLink
                className="youtube-card__link"
                href={video.youtubeUrl}
                ariaLabel={`${video.koreanTitle ?? video.title} 프로젝트 데모 영상 YouTube에서 새 탭으로 보기`}
              >
                YouTube에서 영상 보기
              </ExternalLink>
            </div>

            <details className="youtube-card__details">
              <summary>프로젝트 상세 보기</summary>
              <div>
                {video.purpose && (
                  <section>
                    <span>Purpose</span>
                    <p>{video.purpose}</p>
                  </section>
                )}
                {video.role && (
                  <section>
                    <span>Role</span>
                    <p>{video.role}</p>
                  </section>
                )}
                {video.users && (
                  <section>
                    <span>Users</span>
                    <p>{video.users.join(" · ")}</p>
                  </section>
                )}
                <section>
                  <span>Implementation</span>
                  <ul>
                    {video.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <span>Current scope</span>
                  <p>{video.scopeNote}</p>
                </section>
                <section>
                  <span>Technology</span>
                  <p>{video.stack.join(" · ")}</p>
                </section>
              </div>
            </details>
          </div>
        </article>
      ))}
    </div>

    <div className="youtube-channel-cta">
      <div>
        <span>4 functional prototypes</span>
        <p>네 개 프로젝트의 화면과 기능을 채널에서 이어서 볼 수 있습니다.</p>
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
