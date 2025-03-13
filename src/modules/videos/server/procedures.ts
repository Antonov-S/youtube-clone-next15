import { z } from "zod";
import { eq, and, or, lt, desc } from "drizzle-orm";

import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

import { db } from "@/db";
import { videos } from "@/db/schema";

export const studioRauter = createTRPCRouter({});
