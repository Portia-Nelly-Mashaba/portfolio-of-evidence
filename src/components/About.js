import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillCode } from "react-icons/ai";
import Profile from "./../assets/profile.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-containerSmaller mx-auto py-20 lg:py-24 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Portia Mashaba, and I am passionate about creating
            impactful digital solutions. My journey into web and mobile
            development began with a fascination for technology and its ability
            to solve real-world problems.
          </p>
          <p>
            Before joining CodeTribe Academy, I gained foundational experience
            in Python, Flutter, Laravel, and database management. During my time
            at CodeTribe, I honed my skills in collaboration, time management,
            and presenting ideas effectively.
          </p>
          <p>
            Fast-forward to today, I am a dynamic software developer with
            expertise in{" "}
            <span className="text-textGreen">
              full-stack development, software testing, and UI/UX design.
            </span>{" "}
            At CodeTribe, I’ve grown into a more efficient coder, capable of
            managing end-to-end projects and delivering user-centric
            applications.
          </p>
          <p>
            <span className="text-textGreen">My aspiration</span> is to continue
            building innovative, scalable solutions while contributing to the
            tech ecosystem through mentorship and knowledge-sharing.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              React Native
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              React.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                           <img
                className="rounded-lg h-full w-full object-cover"
                src={Profile}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              {/* <div className="hidden lgl:inline-flex absolute w-full h-80 border-2 border-textGreen rounded-md bottom-0 top-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>            */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
