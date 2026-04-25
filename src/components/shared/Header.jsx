import React from 'react'
// import logo from "@/assets/logo.png"
import Image from 'next/image'
import { format } from 'date-fns';


const Header = () => {
  return (
    <div className="text-center py-8 space-y-4">
      <Image
        src={''}
        width={300}
        height={300}
        alt="logo"
        className="mx-auto"
      ></Image>
      <p className="text-xl font-semibold">Journalism</p>
      <p className="text-2xl">
        {' '}
        {format(new Date(), "EEEE, MMMM d, yyyy")} {' '}
      </p>
    </div>
  );
}

export default Header