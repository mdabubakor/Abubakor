'use client'
import { exparience } from '@/Constants/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import ABU from '../Assets/todo.png'


interface props {
  item:"string"
}
const Exparience = () => {

  
  return (
    
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 2}} className=' px-4 m-10'>
      <h2 className='text-white text-5xl flex items-center justify-center my-28 p-9 shadow-inner shadow-zinc-700 rounded-full'>Exparience</h2>
      <div className='xl:grid grid-cols-4 sm:grid-1   gap-4 ' >
      
      {
        exparience.map((item)=>(
          <div key={item.id}   className=' text-white   shadow-zinc-600  rounded-2xl '>
          
           <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 600, damping: 17 }} className='shadow-inner shadow-zinc-600 rounded-xl gap-4 hover:gap-14 bg-transparent hover:bg-slate-900 duration-0 hover:duration-75'>
           <Image src={item.image} alt='logo'/>
           <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}  transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='ms-2 rounded-xl  text-3xl font-semibold'>{item.title}</motion.p>
            <p className='ms-2 rounded-xl  shadow-slate-400 text-2xl text-zinc-500 font-medium '>{item.company}</p>
            <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}  transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='ms-2 rounded-xl p-4 text-lg font-semibold  text-zinc-300 flex items-center justify-center '>{item.position}</motion.p>
            <p className='ms-2 rounded-xl    text-lg'>{item.duration}</p>
            <p className='ms-2 rounded-xl  '>{item.description}</p>
           </motion.div>
          </div>
         
        ))
      }
      </div>
     
    </motion.div>
  )
}

export default Exparience
