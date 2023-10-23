'use client'

import Image from "next/image";
import ABS from "../Assets/ABS.png";
import Container from "./Container";
import Link from "next/link";
import { Services, navigation } from "@/Constants/data";
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <>
   
    <div className=" bg-zinc-800 mt-10  text-zinc-300">
      <Container className=" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4  xl:place-items-center gap-10 py-8">
        <div className="items-center flex flex-col ">
        <Link href={'/'}>
        <Image
            src={ABS}
            alt="ABS"
            className="w-16  h-16 pb-5 animate-ping duration-1000"
          />
        </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex qui cum
            corrupti perspiciatis rem ad magnam pariatur laboriosam. Quaerat est
            eveniet aliquam placeat consequuntur veniam, porro magnam tenetur
            tempora molestiae.
          </p>
        </div>
        <ul className='flex flex-col items-center justify-center gap-4 uppercase font-semibold text-sm text-zinc-500'>
              {
                navigation.map((item)=>(
                    <Link key={item.title} href={item.href}>
                    <li className='hover:text-white cursor-pointer duration-200 relative group overflow-hidden '>{item.title} 
                    <span className='h-[1px] duration-300 w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 '/></li>
                    </Link>
                ))
              }
            
               </ul>
               <ul className='flex flex-col items-center justify-center gap-4 uppercase font-semibold text-sm text-zinc-500'>
              {
                Services.map((item)=>(
                    
                    <li key={item.title} className='hover:text-white cursor-pointer duration-200 relative group overflow-hidden '>{item.title} 
                    <span className='h-[1px] duration-300 w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 '/></li>
                    
                ))
              }
            
               </ul >
        <div className=" ">
          <h2 className="text-4xl pb-10 torigin-top-left rotate-12">Social Media AC</h2>
          <div className="flex text-4xl gap-10 items-center justify-center ">
          <a className=" " target="_blank" href="http://www.facebook.com/mdabubakor13"><AiFillFacebook/> </a>

          <a target="_blank" href="http://www.instagram.com/abu_bakar460/"><FaInstagramSquare/></a>
          <a target="_blank" href="http://github.com/mdabubakor"><BsGithub/></a>
          <a target="_blank"href="http://www.youtube.com/@iabs4203/videos"><BsYoutube/></a>
          </div>
        </div>
      </Container>
    </div>
    </>

  );
};

export default Footer;
