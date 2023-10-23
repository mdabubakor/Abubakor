'use client'
import { exparience } from '@/Constants/data'
import Image from 'next/image'
import React from 'react'
import AB from '../Assets/Ab 1.png'
import { motion } from 'framer-motion'


interface props {
  item:"string"
}
const Exparience = () => {

  
  return (
    <div className=' px-4 m-10'>
      <h2 className='text-white text-5xl flex items-center justify-center my-28 p-9 shadow-inner shadow-zinc-700 rounded-full'>Exparience</h2>
      <div className='xl:grid grid-cols-4 md:grid-1  gap-4  ' >
      {
        exparience.map((item)=>(
          <div key={item.id}   className=' text-white   shadow-zinc-600  rounded-2xl '>
          
           <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 600, damping: 17 }} className='shadow-inner shadow-zinc-600 rounded-xl'>
           <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}  transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='ms-2 rounded-xl  text-3xl font-semibold'>{item.title}</motion.p>
            <p className='ms-2 rounded-xl  shadow-slate-400 text-2xl text-zinc-500 font-medium '>{item.company}</p>
            <p className='ms-2 rounded-xl p-4 text-lg font-semibold  text-zinc-300 flex items-center justify-center '>{item.position}</p>
            <p className='ms-2 rounded-xl    text-lg'>{item.duration}</p>
            <p className='ms-2 rounded-xl  '>{item.description}</p>
           </motion.div>
          </div>
         
        ))
      }
      </div>
     
    </div>
  )
}

export default Exparience
