import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

export default function Calendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          <div className="bg-muted rounded-md p-2 text-center text-sm font-medium">
            Sun
          </div>
          <div className="bg-muted rounded-md p-2 text-center text-sm font-medium">
            Mon
          </div>
          <div className="bg-muted rounded-md p-2 text-center text-sm font-medium">
            Tue
          </div>
          <div className="bg-muted rounded-md p-2 text-center text-sm font-medium">
            Wed
          </div>
          <div className="bg-muted rounded-md p-2 text-center text-sm font-medium">
            Thu
          </div>
          <div className="bg-muted rounded-md p-2 text-center text-sm font-medium">
            Fri
          </div>
          <div className="bg-muted rounded-md p-2 text-center text-sm font-medium">
            Sat
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-primary text-primary-foreground rounded-md p-4">
            <h3 className="text-lg font-medium">Study Group</h3>
            <p className="text-sm">June 1, 2023 - 7:00 PM</p>
          </div>
          <div className="bg-secondary text-secondary-foreground rounded-md p-4">
            <h3 className="text-lg font-medium">Work Meeting</h3>
            <p className="text-sm">June 5, 2023 - 2:00 PM</p>
          </div>
          <div className="bg-muted rounded-md p-4">
            <h3 className="text-lg font-medium">Dentist Appointment</h3>
            <p className="text-sm">June 10, 2023 - 10:00 AM</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Add Event
        </Button>
      </CardFooter>
    </Card>
  );
}
