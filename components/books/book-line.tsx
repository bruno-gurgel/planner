import { Books } from "@prisma/client";
import { Badge } from "../ui/badge";
import ReadingActions from "./reading-actions";
import Tag from "../shared/tag";
import { cn, formatDate } from "@/lib/utils";

export default function BookLine({
  book,
  reverse = false,
}: {
  book: Books;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn("flex items-center", reverse ? "gap-3" : "justify-between")}
    >
      {reverse ? (
        <div className="flex gap-2">
          <ReadingActions
            id={book.id}
            notStarted={book.startedAt === null}
            done={book.doneAt !== null}
            tags={book.tags}
            name={book.title}
          />
        </div>
      ) : null}

      <div>
        <p className="text-lg font-medium">{book.title}</p>

        <p className="text-muted-foreground">{book.author}</p>

        {book.doneAt ? (
          <p className="text-muted-foreground">{formatDate(book.doneAt)}</p>
        ) : book.startedAt ? (
          <p className="text-muted-foreground">{formatDate(book.startedAt)}</p>
        ) : null}

        <div className="flex gap-1 mt-2">
          {book.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {reverse ? null : (
        <div className="flex gap-2">
          <ReadingActions
            id={book.id}
            notStarted={book.startedAt === null}
            done={book.doneAt !== null}
            tags={book.tags}
            name={book.title}
          />
        </div>
      )}
    </div>
  );
}
