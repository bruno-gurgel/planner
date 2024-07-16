import BookLine from "@/components/books/book-line";
import ReadingActions from "@/components/books/reading-actions";
import CourseLine from "@/components/courses/course-line";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBooksDTO } from "@/data/books-dto";
import { getCoursesDTO } from "@/data/courses-dto";
import { formatDate } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default async function Books() {
  const { current, next, read } = await getBooksDTO();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Past Books</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="grid gap-4">
                {read.map((item) => (
                  <BookLine key={item.id} book={item} reverse />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Reading</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="grid gap-4">
                {current.map((item) => (
                  <BookLine key={item.id} book={item} reverse />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Reads</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="grid gap-4">
                {next.map((item) => (
                  <BookLine key={item.id} book={item} reverse />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
