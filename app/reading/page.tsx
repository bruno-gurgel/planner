import ReadingActions from "@/components/reading-actions";
import { getBooksDTO } from "@/data/books-dto";
import { getCoursesDTO } from "@/data/courses-dto";
import { formatDate } from "@/lib/utils";

export default async function Books() {
  const { current, next, read } = await getBooksDTO();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Past Studies</h2>
          <div className="grid gap-4">
            {read.map((item) => (
              <div key={item.id} className="bg-card p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <ReadingActions id={item.id} done />

                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>

                    <p className="text-muted-foreground">{item.author}</p>

                    {item.doneAt ? (
                      <p className="text-muted-foreground">
                        {formatDate(item.doneAt)}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Current Studying</h2>
          <div className="grid gap-4">
            {current.map((item) => (
              <div key={item.id} className="bg-card p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <ReadingActions id={item.id} />

                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>

                    <p className="text-muted-foreground">{item.author}</p>

                    {item.startedAt ? (
                      <p className="text-muted-foreground">
                        {formatDate(item.startedAt)}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Future Studies</h2>
          <div className="grid gap-4">
            {next.map((item) => (
              <div key={item.id} className="bg-card p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <ReadingActions id={item.id} />

                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>

                    <p className="text-muted-foreground">{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
