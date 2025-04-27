// Components/Home/Navbar/Nav.tsx
import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
      <div className='flex items-center h-full justify-center w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        {/* {LOGO} */}
        <Image
          src="/images/Logo1.png" // ✅ Fixed the src path
          alt="LOGO"
          width={170}
          height={170}
          className='ml-[-1.5rem] sm:ml-0'
        />
      </div>
    </div>
  )
}

export default Nav;