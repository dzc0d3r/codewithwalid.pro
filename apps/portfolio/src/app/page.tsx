import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@codewithwalid/ui/components/select"
import { ThemeToggle } from "@codewithwalid/ui/layout/navbar/toggle-theme"
import SheetDemo from "@codewithwalid/ui/layout/sheet"

export default function Page(): JSX.Element {
  return (
    <main className="grid min-h-screen place-content-center">
      {/* <div>
        <h2 className="m-5 text-3xl">Here is a shared ui component for you</h2>
      </div>
      <div className="mx-auto my-2 flex w-full justify-center">
        <SheetDemo />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ThemeToggle /> */}
    </main>
  )
}
