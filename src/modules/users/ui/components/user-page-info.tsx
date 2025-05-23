import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { SubscriptionButton } from "@/modules/subscriptions/ui/components/subscription-button";

import { BULET_SYMBOL } from "@/constants";
import { UserGetOneOutput } from "../../types";
import { UseSubscription } from "@/modules/subscriptions/hooks/use-subscriptions";
import { cn } from "@/lib/utils";

interface UserPageInfoProps {
  user: UserGetOneOutput;
}

export const UserPageInfo = ({ user }: UserPageInfoProps) => {
  const { userId, isLoaded } = useAuth();
  const clerk = useClerk();

  const { isPending, onClick } = UseSubscription({
    userId: user.id,
    isSubscribed: user.viewerSubscribed
  });

  return (
    <div className="py-6">
      {/* Mobile layout */}
      <div className="flex flex-col md:hidden">
        <div className="flex items-center gap-3">
          <UserAvatar
            name={user.name}
            imageUrl={user.imageUrl}
            size="lg"
            className="h-[60px] w-[60px]"
            onClick={() => {
              if (user.clerk_id === userId) {
                clerk.openUserProfile();
              }
            }}
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <span>{user.subscriberCount} subscribers</span>
              <span>{BULET_SYMBOL}</span>
              <span>{user.videoCount} videos</span>
            </div>
          </div>
        </div>
        {userId === user.clerk_id ? (
          <Button
            variant="secondary"
            asChild
            className="w-full mt-3 rounded-full"
          >
            <Link href="/studio">Go to studio</Link>
          </Button>
        ) : (
          <SubscriptionButton
            disabled={isPending || !isLoaded}
            isSubscribed={user.viewerSubscribed}
            onClick={onClick}
            className="w-full mt-3"
          />
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-start gap-4">
        <UserAvatar
          name={user.name}
          imageUrl={user.imageUrl}
          size="xl"
          className={cn(
            userId === user.clerk_id &&
              "cursor-pointer hover:opacity-80 transition-opacity duration-300"
          )}
          onClick={() => {
            if (user.clerk_id === userId) {
              clerk.openUserProfile();
            }
          }}
        />
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold">{user.name}</h1>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-3">
            <span>{user.subscriberCount} subscribers</span>
            <span>{BULET_SYMBOL}</span>
            <span>{user.videoCount} videos</span>
          </div>
          {userId === user.clerk_id ? (
            <Button variant="secondary" asChild className="mt-3 rounded-full">
              <Link href="/studio">Go to studio</Link>
            </Button>
          ) : (
            <SubscriptionButton
              disabled={isPending || !isLoaded}
              isSubscribed={user.viewerSubscribed}
              onClick={onClick}
              className="mt-3"
            />
          )}
        </div>
      </div>
    </div>
  );
};
