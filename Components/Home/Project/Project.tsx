// Components/Home/Project/Project.tsx
'use client'

import React, { useEffect, useState } from 'react'
import SectionHeading from '@/Components/Helper/SectionHeading'
import { projectData as fallbackData } from '@/Data/data'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from '../../../lib/firebase'

type ProjectType = {
  id?: string | number;
  url?: string;
  image?: string;
  imageUrl?: string;
  title?: string;
  name?: string;
}

const Project = () => {
  const [projectsData, setProjectsData] = useState<ProjectType[]>(fallbackData);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const res = await getData('Portfolio/ProjectPage');
        console.log('Firebase ProjectPage Data:', res);
        
        // Simple data handling
        if (res && typeof res === 'object') {
          // Convert object to array if needed
          const projectsArray = Array.isArray(res) ? res : Object.values(res);
          setProjectsData(projectsArray);
        }
      } catch (error) {
        console.error('Error fetching projects data:', error);
      }
    };
    
    fetchProjectsData();
  }, []);

  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>My Projects</SectionHeading>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectsData.map((project, i) => (
          <div 
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}`} 
            key={project.id || i} 
            className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300'
          >
            <Link href={project.url || '#'} target='blank'>
              <Image 
                src={project.image || project.imageUrl || '/default-project.png'} 
                alt={project.title || project.name || 'project'} 
                width={300} 
                height={200} 
                className='w-full'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/default-project.png';
                }}
              />
            </Link>
          </div>
        ))}
      </div>  
    </div>
  )
}

export default Project