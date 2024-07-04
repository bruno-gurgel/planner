import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ReadingList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reading List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="text-lg font-medium">
                Atomic Habits by James Clear
              </h3>
              <p className="text-muted-foreground">James Clear</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-3 bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "90%" }}
                />
              </div>
              <span className="text-muted-foreground">90%</span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="text-lg font-medium">
                The Lean Startup by Eric Ries
              </h3>
              <p className="text-muted-foreground">Eric Ries</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-3 bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "70%" }}
                />
              </div>
              <span className="text-muted-foreground">70%</span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="text-lg font-medium">
                Sapiens by Yuval Noah Harari
              </h3>
              <p className="text-muted-foreground">Yuval Noah Harari</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-3 bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "50%" }}
                />
              </div>
              <span className="text-muted-foreground">50%</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Add Book
        </Button>
      </CardFooter>
    </Card>
  );
}
