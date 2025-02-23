import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PageClient } from "./client";
import { HydrateClient, trpc } from "@/trpc/server";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Svetlozar2S" });

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <PageClient />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
