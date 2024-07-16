import { Badge } from "../ui/badge";

export default function Tag({ children }: React.PropsWithChildren) {
  return <Badge variant="outline">{children}</Badge>;
}
