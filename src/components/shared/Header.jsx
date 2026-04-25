import React from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'

const Header = () => {
  return (
    <div className='text-center py-8 space-y-4'>
      <Image src={logo} width={300} height={300} alt='logo' className='mx-auto'></Image>
      <p>Journalism</p>
      <p>date</p>
      {/* formate the data by using datefns package */}
    </div>
  )
}

export default Header