import { Card, CardTitle, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonReminder() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div>
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div>
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div>
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
