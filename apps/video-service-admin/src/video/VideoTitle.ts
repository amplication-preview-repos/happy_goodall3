import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "title";

export const VideoTitle = (record: TVideo): string => {
  return record.title?.toString() || String(record.id);
};
