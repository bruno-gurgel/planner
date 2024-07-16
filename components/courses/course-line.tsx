import { Courses } from "@prisma/client";
import { Badge } from "../ui/badge";
import StudyingActions from "./course-actions";
import Tag from "../shared/tag";
import { cn } from "@/lib/utils";

export default function CourseLine({
  course,
  reverse = false,
}: {
  course: Courses;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn("flex items-center", reverse ? "gap-3" : "justify-between")}
    >
      {reverse ? (
        <div className="flex gap-2">
          <StudyingActions
            id={course.id}
            notStarted={course.startedAt === null}
            done={course.doneAt !== null}
            tags={course.tags}
            name={course.name}
          />
        </div>
      ) : null}
      <div>
        <p className="text-lg font-medium">{course.name}</p>
        {course.author ? (
          <p className="text-muted-foreground">{course.author}</p>
        ) : null}

        {course.platform ? (
          <p className="text-muted-foreground">{course.platform}</p>
        ) : null}

        <div className="flex gap-1 mt-2">
          {course.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      {reverse ? null : (
        <div className="flex gap-2">
          <StudyingActions
            id={course.id}
            notStarted={course.startedAt === null}
            done={course.doneAt !== null}
            tags={course.tags}
            name={course.name}
          />
        </div>
      )}
    </div>
  );
}
