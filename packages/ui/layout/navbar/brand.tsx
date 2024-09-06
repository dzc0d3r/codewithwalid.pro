import Image from "next/image"
import Link from "next/link"

export interface BrandProps {
  withLogo?: boolean
  brand: string
}
const Brand = ({ withLogo = false, brand = "✧Wɐlᴉd✧" }: BrandProps) => {
  return (
    <Link href="/" className="ml-4 flex items-center gap-2 lg:ml-0">
      {withLogo && (
        <Image
          src="/logo.svg"
          height={40}
          width={40}
          alt="code with walid log"
          className="h-6 w-6 md:h-7 md:w-7"
        ></Image>
      )}
      <h2 className="from-primary bg-gradient-to-r via-blue-700 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl">
        {brand}
      </h2>
    </Link>
  )
}

export default Brand
