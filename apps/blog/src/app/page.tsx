import { Button } from "@codewithwalid/ui/components/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@codewithwalid/ui/components/select";

export default function Page(): JSX.Element {
  return (
    <main className="grid min-h-screen place-content-center">
      <div>
        <h4 className="m-5 text-3xl">Here is a shared ui component for you</h4>

        <Button className="mx-auto flex"> Great</Button>
      </div>
    </main>
  );
}
