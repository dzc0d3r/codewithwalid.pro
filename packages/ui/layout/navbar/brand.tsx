"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export interface BrandProps {
  withLogo?: boolean
  brand: string
}

const Brand = ({ withLogo = false, brand = "✧Wɐlᴉd✧" }: BrandProps) => {
  // Stagger effect for the letters
  const containerVariants = {
    hidden: { opacity: 1 }, // Make sure the container is always visible
    visible: {
      opacity: 1, // Keep the opacity the same during the transition
      transition: {
        staggerChildren: 0.15, // delay between each letter
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0.4, y: 20 }, // Make letters partially visible initially
    visible: { opacity: 1, y: 0 }, // Fade and move the letters to their final position
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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {brand.split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>
    </Link>
  )
}

export default Brand
