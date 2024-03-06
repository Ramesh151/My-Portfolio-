"use client"
import React from 'react'
import Tittle from './tittle'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';

function Skill() {
   
  const skil=[
    {
      text :"React",
      Icon:SiReact,
    },
    {
      text :"Next.Js",
      Icon:SiNextdotjs,
    },
    {
      text :"Tailwind",
      Icon:SiTailwindcss,
    },
    {
      text :"Git",
      Icon:SiGit,
    },
    {
      text :"JavaScript Js",
      Icon:SiJavascript,
    },
    {
      text :"NodeJs",
      Icon:SiNodedotjs,
    }
  ]


  return (
    <div  className=' max-w-5xl mx-auto px-8 '>
      <Tittle text='Skills 🛠️' className=' flex flex-col items-center justify-center -rotate-6' />
      <HoverEffect items={skil}  />
    </div>
  )
}

export default Skill
