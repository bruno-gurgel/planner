import ReadingList from "@/components/home/reading-list";
import StudyTopics from "@/components/home/courses-list";
import { SkeletonCard } from "@/components/skeletons/skeleton-card";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Suspense fallback={<SkeletonCard />}>
        <StudyTopics />
      </Suspense>

      <Suspense fallback={<SkeletonCard />}>
        <ReadingList />
      </Suspense>
    </div>
  );
}
