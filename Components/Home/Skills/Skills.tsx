'use client'

import React, { useEffect, useState } from 'react'
import SectionHeading from '@/Components/Helper/SectionHeading'
import { skillsData as fallbackData } from '@/Data/data'
import SkillsCard from './SkillsCard'
import { getData } from '../../../lib/firebase'

type SkillType = {
  id?: string | number;
  title?: string;
  icon?: string;
  level?: string;
}

const Skills = () => {
  const [skillsData, setSkillsData] = useState<SkillType[]>(fallbackData);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const res = await getData('Portfolio/SkillsPage');
        console.log('Firebase SkillsPage Data:', res);
        
        // Simple data handling
        if (res && typeof res === 'object') {
          // Convert object to array if needed
          const skillsArray = Array.isArray(res) ? res : Object.values(res);
          setSkillsData(skillsArray);
        }
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };
    
    fetchSkillsData();
  }, []);

  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>Skills</SectionHeading>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
        {skillsData.map((skill, i) => (
          <div 
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}`} 
            key={skill.id || i}
          >
            <SkillsCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
