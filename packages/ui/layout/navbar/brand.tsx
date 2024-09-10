"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export interface BrandProps {
  withLogo?: boolean
  brand: string
}

const Brand = ({ withLogo = false, brand = "✧Wɐlᴉd✧" }: BrandProps) => {
  // Rolling effect for the letters with delay
  const letterVariants = {
    initial: { opacity: 1, rotate: 0 }, // Ensure letters are always visible
    animate: (index: number) => ({
      opacity: 1,
      rotate: 360, // Full rotation for the rolling effect
      transition: {
        duration: 1, // Duration for each letter roll
        ease: "easeInOut",
        delay: index * 0.15, // Delay each letter based on its position
      },
    }),
  }

  // Subtle neon text shadow style based on the primary color
  const gradientStyle = {
    background:
      "linear-gradient(to right bottom, #0c326a, #08518d, #0072af, #0094cf, #14b8ee);",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "#000", // Fallback color
  }

  return (
    <Link href="/" className="flex items-center gap-2 lg:ml-0">
      {withLogo && (
        <Image
          src="/logo.svg"
          height={40}
          width={40}
          alt="code with walid logo"
          className="h-6 w-6 md:h-7 md:w-7"
        />
      )}
      <motion.h2
        className="from-primary bg-gradient-to-r via-blue-500 to-teal-400 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl"
        initial="initial"
        animate="animate"
      >
        {brand.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index} // Pass index to animate each letter differently
            variants={letterVariants}
            className="text-primary" // Use Tailwind's text-primary for color
            style={{ display: "inline-block", ...gradientStyle }} // Apply neon shadow
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>
    </Link>
  )
}

export default Brand
