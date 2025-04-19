import { studioRauter } from "@/modules/studio/server/procedures";
import { videosRauter } from "@/modules/videos/server/procedures";
import { commentsRauter } from "@/modules/comments/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { videoViewsRauter } from "@/modules/video-views/server/procedures";
import { subscriptionRauter } from "@/modules/subscriptions/server/procedures";
import { videoReactionsRauter } from "@/modules/video-reactions/server/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  studio: studioRauter,
  videos: videosRauter,
  comments: commentsRauter,
  categories: categoriesRouter,
  videoViews: videoViewsRauter,
  subscriptions: subscriptionRauter,
  videoReactions: videoReactionsRauter
});
// export type definition of API
export type AppRouter = typeof appRouter;
