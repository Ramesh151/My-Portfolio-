import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Navbar = ({className}:{className?:string}) => {

  const social=[
    {
     Link:"$",
     Label:"Linkedin",
     Icon:SiLinkedin,
    },

    {
      Link:"@",
      Label:"Github",
      Icon:SiGithub,
     },

     {
      Link:"#",
      Label:"X",
      Icon:SiX,
     }
  ] 

  return (
     <>
     <nav className={cn(" sm:mx-3 py-10 flex justify-between items-center",className)} >
      <h1 className=' text-2xl font-bold underline underline-offset-8 decoration-green-600 -rotate-2'>Ramesh Kumar 👨‍💻</h1>
      <div className=' flex items-center gap-5'>
        {
          social.map((socia,index)=>{

            const Icon=socia.Icon

            return <Link href={socia.Link} aria-label={socia.Label} key={index}>
              
              <Icon  className=' w-5 h-5 hover:scale-125 transition-all'/>
               </Link>
          })
        }
      </div>
     </nav>
     </>
  )
}

export default Navbar
