import BookLine from "@/components/books/book-line";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBooksDTO } from "@/data/books-dto";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import ReadingDraggable from "./reading-draggable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Books() {
  const { current, next, read } = await getBooksDTO();

  return (
    <div className="container mx-auto py-12 pt-0 px-4 md:px-6 lg:px-8">
      <div className="flex justify-end items-center">
        <Button asChild>
          <Link href="/reading/add">Add Book</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12">
        <Card>
          <CardHeader>
            <CardTitle>Past Books</CardTitle>
          </CardHeader>

          <CardContent className="h-full">
            <ScrollArea className="h-[500px] overflow-y-auto">
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
            <ScrollArea className="h-[500px] overflow-y-auto">
              <ReadingDraggable books={current} />
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Reads</CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[500px] overflow-y-auto">
              <ReadingDraggable books={next} />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
