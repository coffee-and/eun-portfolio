export type YouTubeThumbnailQuality = "maxresdefault" | "hqdefault";

export const getYouTubeThumbnailUrl = (
  videoId: string,
  quality: YouTubeThumbnailQuality = "maxresdefault",
) => `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
