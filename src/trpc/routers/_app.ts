import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRauter } from "@/modules/studio/server/procedures";
import { videosRauter } from "@/modules/videos/server/procedures";
import { videoViewsRauter } from "@/modules/video-views/server/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  studio: studioRauter,
  videos: videosRauter,
  categories: categoriesRouter,
  videoViews: videoViewsRauter
});
// export type definition of API
export type AppRouter = typeof appRouter;
