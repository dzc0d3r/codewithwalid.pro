"use client"

import { AlignLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../../components/button"
import { Sheet, SheetContent, SheetTrigger } from "../../components/sheet"
import type { Route } from "./links"

export interface MobileMenuProps {
  links?: Route[]
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const path = usePathname()
  return (
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
  )
}

export default MobileMenu
