import React from 'react'
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';
type Props = {
    projects:Project[];
}

export default function Projects({projects}: Props) {
    
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row  justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
    <div className='relative  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
{projects?.map(
    (project,i)=>(
<div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
<motion.img 
initial={{y:-300,
opacity:0}}
transition={{duration:1.2}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
src={urlFor(project?.image).url()}
className='w-72 h-72 mt-36'

/>
<div className='space-y-8 px-0 md:px-10 max-w-6xl'>
    <h4 className='text-2xl font-semibold text-center'>
        <span className='underline decoration-[#F7AB0B]/50'>
        Case Study {i+1} of {projects.length}:
        </span>{" "}
        {project?.title}
    </h4>
    {/* <div className="flex items-center space-x-2 justify-center">
        {project?.technologies.map((technology)=>(
            <img className='h-6 w-6'
            key={technology._id}
            src={urlFor(technology.image).url()}
            alt="elll"
            
            />
        ))}
        </div> */}

    <p className='text-base text-center md:text-left'>{project?.summary}</p>
</div>
</div>
    )
)}
    </div>


    <div className='w-full absolute top-[30%] bg-[#F7AB0B]/10 left-0 h-[00px] -skew-y-12'/>
    </motion.div>
  )
}