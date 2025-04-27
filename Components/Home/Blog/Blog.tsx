// Components/Home/Blog/Blog.tsx
import React from 'react'
import SectionHeading from '@/Components/Helper/SectionHeading'
import { blogs } from '@/Data/data'
import BlogCard from './BlogCard'
const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Blog</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 xl:grid-cols-3 gap-12 items-center">
        {
            blogs.map((blog,i)=>{
                return <div key={blog.id} data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${i * 150}`}>
                {/* {BlogCard} */}
                <BlogCard blog={blog}/>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Blog