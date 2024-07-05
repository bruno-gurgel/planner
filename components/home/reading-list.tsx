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
import ReadingActions from "../reading-actions";

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
            ? current.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-lg font-medium">{item.title}</p>

                    <p className="text-muted-foreground">{item.author}</p>
                  </div>
                  <div className="flex gap-2">
                    <ReadingActions id={item.id} />
                  </div>
                </div>
              ))
            : null}
          <Separator />
          <h3 className="text-xl font-medium">Next Up</h3>

          {next.length
            ? next.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-lg font-medium">{item.title}</p>

                    <p className="text-muted-foreground">{item.author}</p>
                  </div>
                  <div className="flex gap-2">
                    <ReadingActions id={item.id} done />
                  </div>
                </div>
              ))
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
