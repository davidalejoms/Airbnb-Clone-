"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter()
  return (
    <>
      <Image
        src={"/images/logo.png"}
        alt="Airbnb logo clone"
        width={"100"}
        height={"29"}
        className="
        cursor-pointer
        hidden
        md:block
        "
      />
    </>
  )
}

export default Logo
