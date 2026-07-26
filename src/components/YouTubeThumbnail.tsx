import { useState } from "react";
import {
  getYouTubeThumbnailUrl,
  type YouTubeThumbnailQuality,
} from "../utils/youtube";

type YouTubeThumbnailProps = {
  videoId: string;
  alt: string;
  className?: string;
};

const YouTubeThumbnail = ({
  videoId,
  alt,
  className,
}: YouTubeThumbnailProps) => {
  const [quality, setQuality] =
    useState<YouTubeThumbnailQuality | null>("maxresdefault");

  if (!quality) {
    return (
      <span
        className={`${className ?? ""} youtube-thumbnail-fallback`}
        role="img"
        aria-label={`${alt}을 불러오지 못했습니다`}
      >
        <span>video preview</span>
      </span>
    );
  }

  return (
    <img
      className={className}
      src={getYouTubeThumbnailUrl(videoId, quality)}
      alt={alt}
      width="1280"
      height="720"
      loading="lazy"
      decoding="async"
      onError={() => {
        setQuality((currentQuality) =>
          currentQuality === "maxresdefault" ? "hqdefault" : null,
        );
      }}
    />
  );
};

export default YouTubeThumbnail;
