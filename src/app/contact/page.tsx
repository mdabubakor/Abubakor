
import React from 'react'

const page = () => {
  return (
    <div>
    <div className=' flex flex-col items-center min-h-screen mt-40 '>
      <div className='text-white text-3xl font-semibold m-5 '>
        <h2 >CONTACT ME</h2>
      </div>
        <h6 className='text-white text-sm mb-5 font-semibold '>I&apos;ll BE GLAD TO ANSWER YOUR QUESTION!</h6>
      <div className='flex flex-col w-64  '>
        <input className='m-2 ps-2 rounded-md h-8' type="text"  placeholder='Name'/>
        <input className='m-2 ps-2 rounded-md h-8' type="email" placeholder='Email address'/>
        <input className='m-2 ps-2 rounded-md h-8' type="text" placeholder='Subject'/>
        <input type="text" className='m-2 h-24 ps-3 rounded-md' placeholder='Your Message'/>

      </div>
      <div className='text-white'>
        <button className='m-2 bg-zinc-800 hover:bg-zinc-600 h-8 w-32 rounded-md'>Send Message</button>
      </div>
    </div>

 
    
    </div>
  )
}

export default page
