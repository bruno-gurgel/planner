import SubmitButton from "@/components/submit-button";
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
import { getCourseByIdDTO } from "@/data/courses-dto";
import { updateCourseAction } from "@/lib/actions";

export default async function EditCourse({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const data = await getCourseByIdDTO(Number(id));
  const updateUserWithId = updateCourseAction.bind(null, data.id);
  return (
    <form
      className="flex justify-center items-center"
      action={updateUserWithId}
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
                placeholder="Enter the topic name"
                required
                defaultValue={data.name}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author (optional)</Label>
              <Input
                id="author"
                placeholder="Enter the author name"
                name="author"
                defaultValue={data.author || ""}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="platform">Platform (optional)</Label>
              <Input
                id="platform"
                placeholder="Enter the platform name"
                name="platform"
                defaultValue={data.platform || ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Started At (optional)</Label>
              <DatePicker
                placeholder="Pick a start date"
                name="startedAt"
                defaultValue={data.startedAt}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Done At (optional)</Label>
              <DatePicker
                placeholder="Pick a done date"
                name="doneAt"
                defaultValue={data.doneAt}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton type="submit">Update Course</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
}
