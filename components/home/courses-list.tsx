import { getPreviewCoursesDTO } from "@/data/courses-dto";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import Link from "next/link";
import { Separator } from "../ui/separator";
import CourseLine from "../courses/course-line";

export default async function StudyTopics() {
  const { current, next } = await getPreviewCoursesDTO();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Currently Studying</h3>
          {current.length
            ? current.map((item) => <CourseLine key={item.id} course={item} />)
            : null}
          <Separator />
          <h3 className="text-xl font-medium">Next Up</h3>

          {next.length
            ? next.map((item) => <CourseLine key={item.id} course={item} />)
            : null}
          <Separator />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/courses/add">Add Course</Link>
        </Button>

        <Button className="w-full" asChild>
          <Link href="/courses">View All</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
