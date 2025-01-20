import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactJs from "./skills/ReactJs";
import ReactNative from "./skills/Native";
import JavaScript from "./skills/JavaScript";

const Skills = () => {
  const [skillReactJs, setSkillReactJs] = useState(true);
  const [skillReactNative, setSkillReactNative] = useState(false);
  const [skillJavaScript, setSkillJavaScript] = useState(false);

  const handleReactJs = () => {
    setSkillReactJs(true);
    setSkillReactNative(false);
    setSkillJavaScript(false);
  };

  const handleReactNative = () => {
    setSkillReactJs(false);
    setSkillReactNative(true);
    setSkillJavaScript(false);
  };

  const handleJavaScript = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(true);
  };

  return (
    <div id="skills" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="My skills @CodeTribe" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactJs}
            className={`${
                skillReactJs
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            React JS
          </li>
          <li
            onClick={handleReactNative}
            className={`${
                skillReactNative
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            ReactNative
          </li>
          <li
            onClick={handleJavaScript}
            className={`${
                skillJavaScript
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            JavaScript
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Node JS
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            MongoDB
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Firebase
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            Rest API
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            TailwindCSS
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
            HTML&CSS
          </li>
        </ul>
        {skillReactJs && <ReactJs />}
        {skillReactNative && <ReactNative />}
        {skillJavaScript && <JavaScript />}
      </div>
    </div>
  );
};

export default Skills;
