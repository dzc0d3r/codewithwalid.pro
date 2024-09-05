"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"
import { Button } from "../../components/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="h-5 w-5" /> */}
      {/* {theme === "dark" ? (
        <Sun className="h-[1.5rem] w-[1.3rem]" />
      ) : (
        <Moon className="h-5 w-5" />
      )} */}
      <Sun className="dark-rotate-90 absolute h-6 w-6 rotate-0 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
