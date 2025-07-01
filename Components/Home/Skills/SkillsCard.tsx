import React from 'react'
import Image from 'next/image'

type Props = {
  skill: {
    id?: number | string
    title?: string
    name?: string
    image?: string
    imageUrl?: string
    percent?: string
    percentage?: string
  }
}

const SkillsCard = ({ skill }: Props) => {
  // Get the image URL from various possible properties
  const getImageUrl = () => {
    return skill.image || skill.imageUrl || '/default-skill-icon.png';
  };

  // Get the title/name from various possible properties
  const getTitle = () => {
    return skill.name || skill.title || 'Skill';
  };

  // Get the percentage from various possible properties
  const getPercent = () => {
    return skill.percent || skill.percentage || '0%';
  };

  return (
    <div className='p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
      <Image 
        src={getImageUrl()} 
        alt={getTitle()} 
        width={80} 
        height={80} 
        className='object-cover mx-auto'
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/default-skill-icon.png';
        }}
      />
      <h1 className='text-[18px] mt-4 text-white font-[600]'>{getTitle()}</h1>
      <div className='bg-black mt-4 rounded-lg p-2 text-white opacity-40'>
        {getPercent()}
      </div>
    </div>
  )
}

export default SkillsCard
