import { DEFAULT_LIMIT } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";

import { PlaylistsView } from "@/modules/playlist/ui/views/playlists-view";

export const dynamic = "force-dynamic";

const Page = async () => {
  void trpc.playlists.getMany.prefetchInfinite({ limit: DEFAULT_LIMIT });
  return (
    <HydrateClient>
      <PlaylistsView />
    </HydrateClient>
  );
};

export default Page;
