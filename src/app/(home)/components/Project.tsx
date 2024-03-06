"use client";
import React from 'react'
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import Tittle from './tittle'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"


function Project() {
  const projects=[
    {
      title:"E Commerence",
      tech:[SiNextdotjs,SiReact,SiTailwindcss],
      link:"https://bcaclasses.online/",
      cover:"/photo1.png",
      background:"bg-green-500"
    },
    {
      title:"My Protfloi",
      tech:[SiNextdotjs,SiReact,SiTailwindcss],
      link:"https://bcaclasses.online/",
      cover:"/photo1.png",
      background:"bg-green-500"
    },
    {
      title:"My Protfloi",
      tech:[SiNextdotjs,SiReact,SiTailwindcss],
      link:"https://bcaclasses.online/",
      cover:"/photo1.png",
      background:"bg-orange-500"
    }
  ]
  return (
    <div className=' py-10 p-5 sm:p-0'>
      <Tittle text='Projects 🛠️' className=' flex flex-col items-center justify-center -rotate-6' />
      <div className=' grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>

        {
          projects.map((project,index)=>{
            return <Link href={project.link} key={index}>

            <div className={cn("p-5 rounded-md",project.background)}>
            <DirectionAwareHover imageUrl={project.cover} className=' w-full space-y-5  cursor-pointer' >
          <h1 className=' text-2xl font-bold'>{project.title}</h1>

           <div className=' flex items-center gap-5 '>
            {project.tech.map((Icon,index)=>{
              return <Icon className=' w-8 h-8 ' key={index}/>
            })
      }
           </div>

            </DirectionAwareHover>
            </div>

            </Link>
          })
        }

      </div>
      
    </div>
  )
}

export default Project
