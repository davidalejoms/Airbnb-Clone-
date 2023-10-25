"use client"

import Image from "next/image"

const Avatar = () => {
  return (
    <>
      <Image
        height={"30"}
        width={"30"}
        src={"/images/placeholder.jpg"}
        alt="avatar profile"
        className=" rounded-full
  "
      />
    </>
  )
}

export default Avatar
