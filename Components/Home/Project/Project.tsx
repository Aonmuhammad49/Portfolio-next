// Components/Home/Project/Project.tsx
import React from 'react'
import SectionHeading from '@/Components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import Link from 'next/link'
import Image from 'next/image'
const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>My Projects</SectionHeading>
    <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    gap-12 items-center'>
    {
        projectData.map((project,i)=>{
            return <div data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}`} key={project.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all
            duration-300'>
                <Link href={project.url} target='blank'>
                <Image src={project.image} alt='project' width={300} height={200} className='w-full'></Image>
                </Link>
                </div>
        })
    }
    </div>  
    </div>
  )
}
export default Project