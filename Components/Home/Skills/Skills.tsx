import React from 'react'
import SectionHeading from '@/Components/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import SkillsCard from './SkillsCard'
const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>Skills</SectionHeading>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      xl:grid-cols-5 gap-4 items-center'>
        {skillsData.map((skill,i) => (
                  <div data-aos="fade-left"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={`${i * 150}`} key={skill.id}>
                    <SkillsCard skill={skill} />
                  </div>
                ))}
      </div>
    </div>
  )
}

export default Skills
