import Calendar from "@/components/home/calendar";
import ReadingList from "@/components/home/reading-list";
import StudyTopics from "@/components/home/study-topics";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StudyTopics />
      <ReadingList />
      <Calendar />
    </div>
  );
}
