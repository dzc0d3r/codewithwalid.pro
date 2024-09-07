import "./globals.css"
import "@codewithwalid/ui/styles/dist/globals.css"
import { NavBar } from "@codewithwalid/ui/layout/navbar"
import { ThemeProvider } from "@codewithwalid/ui/providers/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
}
const routes = [
  {
    showOnPath: "/",
    href: "#projects",
    label: "Projects",
  },
  {
    showOnPath: "/",
    href: "#summary",
    label: "summary",
  },
  {
    showOnPath: "/",
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
  {
    href: "/test",
    label: "test",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar links={routes} brand="✧Wɐlᴉd✧" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
