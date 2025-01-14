import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Portia Mashaba.{" "}
        <span className="text-textDark at-2 lgl:mt-4">
          I build things for mobile and web.
        </span>
      </motion.h1>
      <motion.p>
        {" "}
        I am a passionate Mobile and Web Developer at Codetribe Tembisa. At
        Codetribe, we build innovative web and mobile applications using React
        and React Native. My expertise ensures seamless, user-friendly
        experiences. Welcome to my Portfolio of Evidence, showcasing my projects
        and achievements.
      </motion.p>{" "}
    </div>
  );
};

export default Hero;
