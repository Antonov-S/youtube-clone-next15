import { createTRPCRouter } from "../init";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRauter } from "@/modules/studio/server/procedures";

export const appRouter = createTRPCRouter({
  studio: studioRauter,
  categories: categoriesRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
