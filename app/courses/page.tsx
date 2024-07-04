import StudyingActions from "@/components/studying-actions";
import { getCoursesDTO } from "@/data/courses-dto";
import { formatDate } from "@/lib/utils";

export default async function StudyingTopics() {
  const { current, next, read } = await getCoursesDTO();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Past Studies</h2>
          <div className="grid gap-4">
            {read.map((item) => (
              <div key={item.id} className="bg-card p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <StudyingActions id={item.id} done />

                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                    {item.author ? (
                      <p className="text-muted-foreground">{item.author}</p>
                    ) : null}

                    {item.platform ? (
                      <p className="text-muted-foreground">{item.platform}</p>
                    ) : null}

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
                  <StudyingActions id={item.id} />

                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                    {item.author ? (
                      <p className="text-muted-foreground">{item.author}</p>
                    ) : null}

                    {item.platform ? (
                      <p className="text-muted-foreground">{item.platform}</p>
                    ) : null}

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
                  <StudyingActions id={item.id} />

                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                    {item.author ? (
                      <p className="text-muted-foreground">{item.author}</p>
                    ) : null}

                    {item.platform ? (
                      <p className="text-muted-foreground">{item.platform}</p>
                    ) : null}
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
