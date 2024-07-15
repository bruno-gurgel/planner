import { getPreviewCoursesDTO } from "@/data/courses-dto";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import Link from "next/link";
import { Separator } from "../ui/separator";
import StudyingActions from "../studying-actions";
import { Badge } from "../ui/badge";

export default async function StudyTopics() {
  const { current, next } = await getPreviewCoursesDTO();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Currently Studying</h3>
          {current.length
            ? current.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-lg font-medium">{item.name}</p>
                    {item.author ? (
                      <p className="text-muted-foreground">{item.author}</p>
                    ) : null}

                    {item.platform ? (
                      <p className="text-muted-foreground">{item.platform}</p>
                    ) : null}

                    <div className="flex gap-1 mt-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <StudyingActions
                      id={item.id}
                      tags={item.tags}
                      name={item.name}
                    />
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
                    <p className="text-lg font-medium">{item.name}</p>
                    {item.author ? (
                      <p className="text-muted-foreground">{item.author}</p>
                    ) : null}

                    {item.platform ? (
                      <p className="text-muted-foreground">{item.platform}</p>
                    ) : null}

                    <div className="flex gap-1 mt-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <StudyingActions
                      id={item.id}
                      notStarted
                      tags={item.tags}
                      name={item.name}
                    />
                  </div>
                </div>
              ))
            : null}
          <Separator />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/courses/add">Add Course</Link>
        </Button>

        <Button className="w-full" asChild>
          <Link href="/courses">View All</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
