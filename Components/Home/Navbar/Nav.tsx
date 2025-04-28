// Components/Home/Navbar/Nav.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/Constant/constant'
import Link from 'next/link'
import { HiBars3BottomLeft } from 'react-icons/hi2'

type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const [NavBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true)
      } else {
        setNavBg(false)
      }
    }

    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [])

  return (
    <div className={`fixed ${NavBg ? 'bg-[#240b39]' : ""} h-[12vh] z-[10] w-full transition-all duration-200`}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto bg-transparent'>
      <Image
        src="https://i.ibb.co/Z6M6S9K3/Logo1.png" // ✅ now PNG with transparent background
        alt="LOGO"
        width={150}
        height={150}
        className="ml-[-1.5rem] sm:ml-0 bg-transparent"
      />
        <div className='flex items-center space-x-10'>
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className='nav_link'>{navlink.label}</p>
                </Link>
              )
            })}
          </div>
          <div className='flex items-center space-x-4'>
            <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
              Hire Me
            </button>
            <HiBars3BottomLeft onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav