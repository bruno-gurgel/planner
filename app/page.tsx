import ReadingList from "@/components/home/reading-list";
import StudyTopics from "@/components/home/courses-list";
import { SkeletonCard } from "@/components/skeletons/skeleton-card";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<SkeletonCard type="study-topics" />}>
          <StudyTopics />
        </Suspense>

        <Suspense fallback={<SkeletonCard type="reading-list" />}>
          <ReadingList />
        </Suspense>
      </div>
    </div>
  );
}
