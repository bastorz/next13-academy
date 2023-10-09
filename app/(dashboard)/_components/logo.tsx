import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
      <Link href="/" className="flex space-x-4 hover:cursor-pointer">
        <Image
          height={60}
          width={60}
          alt="logo"
          src="/descarga.png"
        />
        <h1 className="font-semibold text-lg">The Rose Academy</h1>
      </Link>
  )
}