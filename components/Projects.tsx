import React from 'react'
import { motion } from "framer-motion";
type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row  justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
    <div className='relative  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
{projects.map(
    (project,i)=>(
<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
<motion.img 
initial={{y:-300,
opacity:0}}
transition={{duration:1.2}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
className='w-96 h-96 mt-32'

/>
<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
    <h4 className='text-2xl font-semibold text-center'>
        <span className='underline decoration-[#F7AB0B]/50'>
        Case Study {i+1} of {projects.length}:
        </span>{" "}
        UPS clone
    </h4>

    <p className='text-base text-center md:text-left'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."</p>
</div>
</div>
    )
)}
    </div>


    <div className='w-full absolute top-[30%] bg-[#F7AB0B]/10 left-0 h-[00px] -skew-y-12'/>
    </motion.div>
  )
}