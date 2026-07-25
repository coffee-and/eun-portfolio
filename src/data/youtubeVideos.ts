import {
  getProjectsByPresentation,
  type Project,
} from "./projects";

export type YouTubeVideo = Pick<
  Project,
  | "id"
  | "title"
  | "koreanTitle"
  | "statusLabel"
  | "scopeLabel"
  | "scopeNote"
  | "stack"
  | "cardHighlights"
  | "purpose"
  | "role"
  | "users"
  | "points"
> & {
  description: string;
  youtubeId: string;
  youtubeUrl: string;
};

export const youtubeVideos: YouTubeVideo[] = getProjectsByPresentation(
  "video-demo",
).map((project) => {
  if (
    !project.youtubeId ||
    !project.youtubeUrl ||
    !project.videoDescription
  ) {
    throw new Error(`Missing YouTube data for project: ${project.id}`);
  }

  return {
    id: project.id,
    title: project.title,
    koreanTitle: project.koreanTitle,
    description: project.videoDescription,
    statusLabel: project.statusLabel,
    scopeLabel: project.scopeLabel,
    scopeNote: project.scopeNote,
    stack: project.stack,
    cardHighlights: project.cardHighlights,
    purpose: project.purpose,
    role: project.role,
    users: project.users,
    points: project.points,
    youtubeId: project.youtubeId,
    youtubeUrl: project.youtubeUrl,
  };
});
