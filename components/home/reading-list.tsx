import { getPreviewBooksDTO } from "@/data/books-dto";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Separator } from "../ui/separator";
import BookLine from "../books/book-line";

export default async function ReadingList() {
  const { current, next } = await getPreviewBooksDTO();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Books</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Currently Reading</h3>
          {current.length
            ? current.map((item) => <BookLine key={item.id} book={item} />)
            : null}

          <Separator />
          <h3 className="text-xl font-medium">Next Up</h3>

          {next.length
            ? next.map((item) => <BookLine key={item.id} book={item} />)
            : null}
          <Separator />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/reading/add">Add Book</Link>
        </Button>

        <Button className="w-full" asChild>
          <Link href="/reading">View All</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
