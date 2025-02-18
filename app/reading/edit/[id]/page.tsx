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
import { getBookByIdDTO } from "@/data/books-dto";
import { getCourseByIdDTO } from "@/data/courses-dto";
import { updateBookAction } from "@/lib/actions";

export default async function AddStudyingTopic(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;

  const data = await getBookByIdDTO(Number(id));
  const updateBookActionWithId = updateBookAction.bind(null, data.id);

  return (
    <form
      className="flex justify-center items-center"
      action={updateBookActionWithId}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Edit Book</CardTitle>
          <CardDescription>Fill out the form to edit the book.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter the book name"
                required
                defaultValue={data.title}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                placeholder="Enter the author name"
                name="author"
                defaultValue={data.author || ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (optional)</Label>
              <Input
                id="tags"
                placeholder="Enter tags"
                name="tags"
                defaultValue={data.tags}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="startedAt">Started At (optional)</Label>
              <DatePicker
                placeholder="Pick a start date"
                name="startedAt"
                defaultValue={data.startedAt}
                id="startedAt"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="doneAt">Done At (optional)</Label>
              <DatePicker
                placeholder="Pick a done date"
                name="doneAt"
                defaultValue={data.doneAt}
                id="doneAt"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton type="submit">Update Topic</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
}
