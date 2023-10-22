'use client'
import Container from "@/Components/Container";

import Image from "next/image";
import React from "react";
import Card from "@/Assets/todo.png";
import { CgWebsite } from "react-icons/cg";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { GrNode } from "react-icons/gr";
import {BsFiletypePdf} from 'react-icons/bs'
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div>
      <motion.div className="text-white "  initial={{y:60, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1}}  >
        <Container className="min-h-screen">
          <div className=" flex flex-col  items-center font-bold  h-72 mt-10">
            <h3 className="text-zinc-400 ">What we can do for you</h3>
            <h2 className="text-4xl font-semibold">My Awesome Service</h2>
          </div>
          <div className=" grid grid-cols-3 gap-3 ">
            <div className="  flex flex-col items-center rounded-s-full justify-center py-8  shadow-slate-50 shadow-xl ">
              <div className="flex items-center gap-8 ">
                <h1 className="text-3xl font-semibold">WEB DESIGN</h1>
                <CgWebsite className="text-2xl animate-ping" />
              </div>
              <div className="p-4 text-lg font-bold">
                Now think about what you will do
              </div>
              <p className="ms-10">
                Web design refers to the design of websites that are displayed
                on the internet. It usually refers to the user experience
                aspects of website development rather than software development.
              </p>
              <div>
                <button className="text-xl font-semibold shadow-gray-500 shadow-md bg-zinc-700 w-32 mt-5 h-8 rounded-md hover:bg-zinc-500">
                  <a
                    target="_blanck"
                    href="https://todo-ahjl2j7xp-mdabubakor.vercel.app/"
                  >
                    Enroll now
                  </a>
                </button>
              </div>
            </div>
            <div className="  flex flex-col items-center rounded-xl justify-center py-8  shadow-zinc-500shadow-xl ">
              <div className="flex items-center gap-8 ">
                <h1 className="text-3xl font-semibold">WEB DEVELOPMENT</h1>
                <BsReverseLayoutTextWindowReverse className="text-3xl animate-pulse duration-150" />
              </div>
              <div className="p-4 text-lg font-bold">
                Now think about what you will do
              </div>
              <p className="ms-10">
                Web development is the work involved in developing a website for
                the Internet (World Wide Web) or an intranet (a private
                network). Web development can range from developing a simple
                single static page of plain text to complex web applications,
                electronic businesses, and social network services.
              </p>
              <div>
                <button className="text-xl font-semibold shadow-white shadow-md bg-zinc-700 w-32 mt-5 h-8 rounded-md hover:bg-zinc-500">
                  <a
                    target="_blanck"
                    href="https://todo-ahjl2j7xp-mdabubakor.vercel.app/"
                  >
                    Enroll now
                  </a>
                </button>
              </div>
            </div>
            <div className="  flex flex-col items-center rounded-r-full justify-center py-8  shadow-slate-50 shadow-xl ">
              <div className="flex items-center gap-8 ">
                <h1 className="text-3xl font-semibold">
                  MERN STACK <br /> DEVELOPMENT
                </h1>
                <GrNode className="text-2xl animate-spin" />
              </div>
              <div className="p-4 text-lg font-bold">
                Now think about what you will do
              </div>
              <p className="ms-10  shadow-md">
                MERN developers are responsible for writing reusable, testable,
                and efficient code and developing and designing front end web
                applications.
              </p>
              <div>
                <button className="text-xl font-semibold shadow-black shadow-md bg-zinc-700 w-32 mt-5 h-8 rounded-md hover:bg-zinc-500">
                  <a
                    target="_blanck"
                    href="https://todo-ahjl2j7xp-mdabubakor.vercel.app/"
                  >
                    Enroll now
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-96 mt-16 ms-[450px] items-center rounded-b-md justify-center bg-zinc-800 ">
          <div className="  flex flex-col items-center   rounded-b-full justify-center py-8  shadow-black shadow-xl ">
              <div className="flex items-center gap-8 ">
                <h1 className="text-3xl font-semibold">CREATING ARTICAL</h1>
                <BsFiletypePdf className="text-2xl animate-bounce" />
              </div>
              <div className="p-4 text-lg font-bold">
                Now think about what you will do
              </div>
              <p className="ms-10">
                Web design refers to the design of websites that are displayed
                on the internet. It usually refers to the user experience
                aspects of website development rather than software development.
              </p>
              <div>
                <button className="text-xl font-semibold shadow-zinc-950 shadow-md bg-zinc-700 w-32 mt-5 h-8 rounded-md hover:bg-zinc-500">
                  <a
                    target="_blanck"
                    href="https://todo-ahjl2j7xp-mdabubakor.vercel.app/"
                  >
                    Enroll now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Services;
