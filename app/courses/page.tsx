import CourseLine from "@/components/courses/course-line";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCoursesDTO } from "@/data/courses-dto";

export default async function Courses() {
  const { current, next, read } = await getCoursesDTO();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Past Studies</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[300px]">
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
            <ScrollArea className="h-[300px]">
              <div className="grid gap-4">
                {current.map((item) => (
                  <CourseLine key={item.id} course={item} reverse />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Studies</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="grid gap-4">
                {next.map((item) => (
                  <CourseLine key={item.id} course={item} reverse />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
