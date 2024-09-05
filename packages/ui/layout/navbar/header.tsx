"use client";

import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../../components/button";
import { Sheet, SheetContent, SheetTrigger } from "../../components/sheet";
import Links from "./links";
import type { Route } from "./links";
import { ThemeToggle } from "./toggle-theme"

const routes = [
  {
    href: "#summary",
    label: "Summary",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "https://blog.codewithwalid.pro",
    label: "Blog",
  },
  {
    href: "https://poetry.codewithwalid.pro",
    label: "Poetry",
  },
]

export interface HeaderProps {
  links?: Route[]
}
const Header = ({ links = routes }: HeaderProps) => {
  const path = usePathname()

  return (
    <header className="fixed w-full border-b bg-opacity-90 px-4 py-3 shadow-sm backdrop-blur-md md:container sm:flex sm:justify-between md:mx-auto">
      <div className="relative flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* mobile menu
           * TODO: MOVE THIS TO A SEPERATE COMPONENT
           */}
          <Sheet>
            <SheetTrigger>
              <AlignLeft className="h-6 w-6 md:hidden" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="grid h-full w-full place-content-center gap-4">
                {links?.map((link, i) => (
                  <Button
                    asChild
                    variant={link.href == path ? "default" : "ghost"}
                    key={i}
                  >
                    <Link
                      href={link.href}
                      className="block px-2 py-1 text-center text-lg"
                    >
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Brand
           * TODO: MOVE THIS TO A SEPERATE COMPONENT
           */}
          <Link href="/" className="ml-4 flex items-center gap-2 lg:ml-0">
            {/* <Image
              src="/logo.svg"
              height={40}
              width={40}
              alt="code with walid log"
              className="h-6 w-6 md:h-7 md:w-7"
            ></Image> */}
            <h2 className="bg-gradient-to-r from-red-600 via-yellow-600 to-orange-500 bg-clip-text text-lg font-semibold text-transparent md:text-xl lg:text-2xl">
              ✧Wɐlᴉd✧
            </h2>
          </Link>
        </div>
        <Links routes={links} />
        <div className="-mr-4 flex items-center md:mr-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header