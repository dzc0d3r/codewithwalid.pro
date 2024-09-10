"use client"

import { ucfirst } from "@codewithwalid/lib"
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { buttonVariants } from "../../components/button"

export interface Route {
  showOnPath?: string
  href: string
  label: string
}
export interface RoutesProps {
  routes?: Route[]
}

const Links = ({ routes }: RoutesProps) => {
  const [hash, setHash] = useState<string | null>(null)
  const path = usePathname()
  const MotionLink = motion(Link)
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
    <nav className="mx-auto hidden flex-1 justify-center lg:flex lg:space-x-2">
      {routes && routes.length > 0 ? (
        <ul className="flex flex-row gap-1">
          <AnimatePresence>
            {routes.map((route, i) => {
              const x = useMotionValue(0)
              const y = useMotionValue(0)

              return (
                <motion.li key={route.href} style={{ x, y }}>
                  {route.href.startsWith("#") ? (
                    <MotionLink
                      key={i}
                      href={route.href}
                      onClick={() => handleClick(route.href)}
                      className={`${route.showOnPath === path ? "flex items-center justify-center" : "hidden"} ${buttonVariants(
                        { variant: "transparent", size: "rounded" },
                      )} md:text-normal relative text-sm transition-all duration-500 ease-in-out lg:text-base`}
                    >
                      {ucfirst(route.label)}

                      {hash === route.href ? (
                        <motion.div
                          transition={{ type: "spring" }}
                          layoutId="active"
                          className={`border-primary absolute -bottom-4 w-[50%] border-b-[.2rem]`}
                        ></motion.div>
                      ) : null}
                    </MotionLink>
                  ) : (
                    <MotionLink
                      key={i}
                      href={route.href}
                      className={`${buttonVariants({ variant: "transparent", size: "rounded" })} duration-400 md:text-normal relative text-sm transition-all ease-in-out first-letter:uppercase lg:text-base`}
                      target={
                        route.href.startsWith("https://") ? "_blank" : "_self"
                      }
                    >
                      {ucfirst(route.label)}
                      {path === route.href ? (
                        <motion.div
                          transition={{ type: "spring" }}
                          layoutId="active"
                          className={`border-primary absolute -bottom-4 left-0 w-full -translate-x-1/2 transform border-b-[.2rem]`}
                        ></motion.div>
                      ) : null}
                    </MotionLink>
                  )}
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      ) : null}
    </nav>
  )
}

export default Links
