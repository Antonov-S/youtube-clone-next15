"use client";

import { Suspense } from "react";
import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Svetlozar" });
  return <div>Page client says: {data.greeting}</div>;
};
