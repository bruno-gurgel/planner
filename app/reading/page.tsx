import BookLine from "@/components/books/book-line";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBooksDTO } from "@/data/books-dto";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import ReadingDraggable from "./reading-draggable";

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
            <ReadingDraggable books={current} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Reads</CardTitle>
          </CardHeader>

          <CardContent>
            <ReadingDraggable books={next} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
