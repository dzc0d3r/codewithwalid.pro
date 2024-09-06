"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { buttonVariants } from "../../components/button"

export interface Route {
  href: string
  label: string
}
export interface RoutesProps {
  routes?: Route[]
}

const Links = ({ routes }: RoutesProps) => {
  const [hash, setHash] = useState<string | null>(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash)
    }
  }, [])

  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      setHash(href)
    }
  }

  return (
    <nav className="mx-auto hidden flex-1 justify-center md:flex md:space-x-2">
      {routes &&
        routes.length > 0 &&
        routes.map((route, i) =>
          route.href.startsWith("#") ? (
            <Link
              key={i}
              href={route.href}
              onClick={() => handleClick(route.href)}
              className={`${buttonVariants(
                route.href === hash
                  ? { variant: "default", size: "rounded" }
                  : { variant: "ghost", size: "rounded" },
              )} duration-400 md:text-normal text-sm transition-all ease-in-out lg:text-base`}
            >
              {route.label}
            </Link>
          ) : (
            <Link
              key={i}
              href={route.href}
              className={`${buttonVariants({ variant: "ghost", size: "rounded" })} duration-400 md:text-normal text-sm transition-all ease-in-out lg:text-base`}
              target="_blank"
            >
              {route.label}
            </Link>
          ),
        )}
    </nav>
  )
}

export default Links
