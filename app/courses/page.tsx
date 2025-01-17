import CourseLine from "@/components/courses/course-line";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCoursesDTO } from "@/data/courses-dto";
import CoursesDraggable from "./courses-draggable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Courses() {
  const { current, next, read } = await getCoursesDTO();

  return (
    <div className="container mx-auto py-12 pt-0 px-4 md:px-6 lg:px-8">
      <div className="flex justify-end items-center">
        <Button asChild>
          <Link href="/courses/add">Add Course</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12">
        <Card>
          <CardHeader>
            <CardTitle>Past Studies</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[500px] overflow-y-auto">
              <div className="grid gap-4">
                {read.map((item) => (
                  <CourseLine key={item.id} course={item} reverse />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Studying</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[500px] overflow-y-auto">
              <CoursesDraggable courses={current} />
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Studies</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[500px] overflow-y-auto">
              <CoursesDraggable courses={next} />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
