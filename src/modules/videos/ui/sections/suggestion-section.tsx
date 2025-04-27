"use client";

import { trpc } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";

interface SuggestionsSectionProps {
  videoId: string;
}

export const SuggestionsSection = ({ videoId }: SuggestionsSectionProps) => {
  const [suggestions] = trpc.suggestions.getMany.useSuspenseInfiniteQuery(
    {
      videoId: videoId,
      limit: DEFAULT_LIMIT
    },
    {
      getNextPageParam: lastPage => lastPage.nextCursor
    }
  );

  return <div>{JSON.stringify(suggestions)}</div>;
};
