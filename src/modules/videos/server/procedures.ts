import { z } from "zod";
import { eq, and, or, lt, desc } from "drizzle-orm";

import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

import { db } from "@/db";
import { videos } from "@/db/schema";

export const videosRauter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const [video] = await db
      .insert(videos)
      .values({ userId, title: "Untitled" })
      .returning();

    return { video: video };
  })
});
