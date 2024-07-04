import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function SkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-8">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />

          <Skeleton className="self-center h-8 w-1/2" />
          <Skeleton className="self-center h-8 w-1/2" />
        </div>
      </CardContent>
    </Card>
  );
}
