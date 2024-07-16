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
import { createBookAction } from "@/lib/actions";

export default function AddBook() {
  return (
    <form
      className="flex justify-center items-center"
      action={createBookAction}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Add Book</CardTitle>
          <CardDescription>
            Fill out the form to add a new book.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter the book title"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                placeholder="Enter the author name"
                name="author"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Started At (optional)</Label>
              <DatePicker placeholder="Pick a start date" name="startedAt" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Done At (optional)</Label>
              <DatePicker placeholder="Pick a done date" name="doneAt" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton type="submit">Add Book</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
}
