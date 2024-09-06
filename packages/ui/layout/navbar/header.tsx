import Brand from "./brand"
import Links from "./links"
import type { Route } from "./links"
import MobileMenu from "./mobile"
import { ThemeToggle } from "./toggle-theme"

export interface HeaderProps {
  links?: Route[]
  withBrand?: boolean
  brand: string
  spa?: boolean
}
const Header = ({ links, brand }: HeaderProps) => {
  return (
    <header className="fixed w-full justify-center border-b bg-opacity-90 px-4 py-3 shadow-sm backdrop-blur-md md:container sm:flex sm:justify-between">
      <div className="relative flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* mobile menu */}
          <MobileMenu links={links} />
          {/* Brand */}
          <Brand brand={brand} />
        </div>
        {/* Desktop Links */}
        <Links routes={links} />
        <div className="-mr-4 flex items-center md:mr-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
