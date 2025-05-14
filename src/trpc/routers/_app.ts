import { searchRauter } from "@/modules/search/server/procedure";
import { videosRauter } from "@/modules/videos/server/procedures";
import { studioRauter } from "@/modules/studio/server/procedures";
import { commentsRauter } from "@/modules/comments/server/procedures";
import { playlistRauter } from "@/modules/playlist/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { videoViewsRauter } from "@/modules/video-views/server/procedures";
import { suggestionsRauter } from "@/modules/suggestion/server/procedures";
import { subscriptionRauter } from "@/modules/subscriptions/server/procedures";
import { videoReactionsRauter } from "@/modules/video-reactions/server/procedures";
import { commentReactionsRauter } from "@/modules/commnet-reactions/server/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  studio: studioRauter,
  videos: videosRauter,
  search: searchRauter,
  comments: commentsRauter,
  playlists: playlistRauter,
  categories: categoriesRouter,
  videoViews: videoViewsRauter,
  suggestions: suggestionsRauter,
  subscriptions: subscriptionRauter,
  videoReactions: videoReactionsRauter,
  commentReactions: commentReactionsRauter
});
// export type definition of API
export type AppRouter = typeof appRouter;
