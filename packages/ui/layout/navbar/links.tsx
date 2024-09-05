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

  // Ensure the hash is only set on the client side
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
    <nav className="hidden flex-1 justify-center text-center md:block md:space-x-2">
      {routes && routes.length > 0 ? (
        routes.map((route, i) =>
          route.href.startsWith("#") ? (
            <Link
              key={i}
              href={route.href}
              onClick={() => handleClick(route.href)}
              className={`${buttonVariants(
                route.href === hash
                  ? { variant: "destructive" }
                  : { variant: "ghost" },
              )} duration-400 text-sm transition-all ease-in-out md:text-base`}
            >
              {route.label}
            </Link>
          ) : (
            <Link
              key={i}
              href={route.href}
              className={`${buttonVariants({ variant: "ghost" })} duration-400 text-sm transition-all ease-in-out md:text-base`}
              target="_blank"
            >
              {route.label}
            </Link>
          ),
        )
      ) : (
        <p>No routes available</p>
      )}
    </nav>
  )
}

export default Links
