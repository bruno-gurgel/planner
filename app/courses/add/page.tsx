import SubmitButton from "@/components/shared/submit-button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCourseAction } from "@/lib/actions";

export default function AddCourse() {
  return (
    <form
      className="flex justify-center items-center"
      action={createCourseAction}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Add Course</CardTitle>
          <CardDescription>
            Fill out the form to add a new course.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter the course name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author (optional)</Label>
              <Input
                id="author"
                placeholder="Enter the author name"
                name="author"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="platform">Platform (optional)</Label>
              <Input
                id="platform"
                placeholder="Enter the platform name"
                name="platform"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">
                Tags - Separated with commas (optional)
              </Label>
              <Input
                id="tags"
                placeholder="Enter the course tags"
                name="tags"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="startedAt">Started At (optional)</Label>
              <DatePicker
                placeholder="Pick a start date"
                name="startedAt"
                id="startedAt"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="doneAt">Done At (optional)</Label>
              <DatePicker
                placeholder="Pick a done date"
                name="doneAt"
                id="doneAt"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton type="submit">Add Course</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
}
