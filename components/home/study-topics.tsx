import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

export default function StudyTopics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="text-lg font-medium">Mathematics</h3>
              <p className="text-muted-foreground">
                Calculus, Linear Algebra, Discrete Mathematics
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-3 bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "75%" }}
                />
              </div>
              <span className="text-muted-foreground">75%</span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="text-lg font-medium">Computer Science</h3>
              <p className="text-muted-foreground">
                Algorithms, Data Structures, Operating Systems
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-3 bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
              <span className="text-muted-foreground">60%</span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="text-lg font-medium">Physics</h3>
              <p className="text-muted-foreground">
                Mechanics, Electromagnetism, Quantum Mechanics
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-3 bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
              <span className="text-muted-foreground">80%</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Add Topic
        </Button>
      </CardFooter>
    </Card>
  );
}
