"use client"

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
  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number,
  ) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }
  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue,
  ) => {
    const bounds = item.getBoundingClientRect()
    const relativeX = event.clientX - bounds.left
    const relativeY = event.clientY - bounds.top
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)
    x.set(xRange * 10)
    y.set(yRange * 10)
    console.log(xRange)
  }

  return (
    <nav className="mx-auto hidden flex-1 justify-center md:flex md:space-x-2">
      {routes && routes.length > 0 ? (
        <ul className="flex flex-row space-x-2">
          <AnimatePresence>
            {routes.map((route, i) => {
              const x = useMotionValue(0)
              const y = useMotionValue(0)
              const textX = useTransform(x, (latest) => latest * 0.5)
              const textY = useTransform(y, (latest) => latest * 0.5)

              return (
                <motion.li
                  onPointerMove={(event) => {
                    const item = event.currentTarget
                    setTransform(item, event, x, y)
                  }}
                  key={route.href}
                  onPointerLeave={(event) => {
                    x.set(0)
                    y.set(0)
                  }}
                  style={{ x, y }}
                >
                  {route.href.startsWith("#") ? (
                    <MotionLink
                      key={i}
                      href={route.href}
                      onClick={() => handleClick(route.href)}
                      className={`${route.showOnPath === path ? "flex" : "hidden"} ${buttonVariants(
                        { variant: "ghost", size: "rounded" }
                      )} duration-500 md:text-normal relative text-sm transition-all ease-in-out lg:text-base`}
                    >
                      <motion.span
                        style={{ x: textX, y: textY }}
                        className={`relative z-30 ${route.href === hash ? "text-white" : null}`}
                      >
                        {route.label}
                      </motion.span>
                      {hash === route.href ? (
                        <motion.div
                          transition={{ type: "spring" }}
                          layoutId="underline"
                          className={`${buttonVariants({ variant: "default", size: "rounded" })} absolute bottom-0 left-0 h-full w-full`}
                        ></motion.div>
                      ) : null}
                    </MotionLink>
                  ) : (
                    <MotionLink
                      key={i}
                      href={route.href}
                      className={`${buttonVariants(route.href === path ? { variant: "default", size: "rounded" } : { variant: "ghost", size: "rounded" })} duration-400 md:text-normal relative text-sm transition-all ease-in-out lg:text-base`}
                      target={
                        route.href.startsWith("https://") ? "_blank" : "_self"
                      }
                    >
                      <motion.span
                        style={{ x: textX, y: textY }}
                        className="relative z-10"
                      >
                        {route.label}
                      </motion.span>
                      {path === route.href ? (
                        <motion.div
                          transition={{ type: "spring" }}
                          layoutId="underline"
                          className={`${buttonVariants({ variant: "default", size: "rounded" })} absolute bottom-0 left-0 h-full w-full`}
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
