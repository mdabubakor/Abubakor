
import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div >
      <Container className="text-white mt-16 py-16">
        <div className="text-3xl font-semibold">
          <h2>
            About <span className="text-zinc-500">me</span>
          </h2>
          <h3 className="mt-8 ms-[100px]">I am a simple person and very straightforward</h3>
        </div>
      <div>
      <p className="text-md pt-9 flex items-center justify-center ms-[200px]">
          As a dedicated and proficient full-stack developer, I am seeking a
          challenging role in a dynamic organization where I can leverage my
          extensive experience in web technologies, contributing to innovative
          projects, and continually enhancing my skills to foster personal and
          professional growth while adding value to the company&apos; objectives and
          vision.
        </p>
      </div>
      </Container>
    </div>
  );
};

export default About;
