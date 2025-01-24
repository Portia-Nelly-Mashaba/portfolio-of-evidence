import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactJs from "./skills/ReactJs";
import ReactNative from "./skills/Native";
import JavaScript from "./skills/JavaScript";
import NodeJs from "./skills/NodeJS";
import MongoDB from "./skills/MongoDB";
import Firebase from "./skills/Firebase";
import RestApi from "./skills/RestApi";
import TailwindCSS from "./skills/TailwindCSS";
import HtmlCss from "./skills/HtmlCss";

const Skills = () => {
  const [skillReactJs, setSkillReactJs] = useState(true);
  const [skillReactNative, setSkillReactNative] = useState(false);
  const [skillJavaScript, setSkillJavaScript] = useState(false);
  const [skillNode, setSkillNode] = useState(false);
  const [skillMongoDB, setSkillMongoDB] = useState(false);
  const [skillFirebase, setSkillFirebase] = useState(false);
  const [skillRestApi, setSkillRestApi] = useState(false);
  const [skillTailwindCSS, setSkillTailwindCSS] = useState(false);
  const [skillHtmlCss, setSkillHtmlCss] = useState(false);

  const handleReactJs = () => {
    setSkillReactJs(true);
    setSkillReactNative(false);
    setSkillJavaScript(false);
    setSkillNode(false);
    setSkillMongoDB(false);
    setSkillFirebase(false);
    setSkillRestApi(false);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(false);
  };

  const handleReactNative = () => {
    setSkillReactJs(false);
    setSkillReactNative(true);
    setSkillJavaScript(false);
    setSkillNode(false);
    setSkillMongoDB(false);
    setSkillFirebase(false);
    setSkillRestApi(false);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(false);
  };

  const handleJavaScript = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(true);
    setSkillNode(false);
    setSkillMongoDB(false);
    setSkillFirebase(false);
    setSkillRestApi(false);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(false);
  };

  const handleNode = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(false);
    setSkillNode(true);
    setSkillMongoDB(false);
    setSkillFirebase(false);
    setSkillRestApi(false);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(false);
  };
  const handleMongoDB = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(false);
    setSkillNode(false);
    setSkillMongoDB(true);
    setSkillFirebase(false);
    setSkillRestApi(false);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(false);
  };
  const handleFirebase = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(false);
    setSkillNode(false);
    setSkillMongoDB(false);
    setSkillFirebase(true);
    setSkillRestApi(false);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(false);
  };
  const handleRestApi = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(false);
    setSkillNode(false);
    setSkillMongoDB(false);
    setSkillFirebase(false);
    setSkillRestApi(true);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(false);
  };
  const handleTailwindCSS = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(false);
    setSkillNode(false);
    setSkillMongoDB(false);
    setSkillFirebase(false);
    setSkillRestApi(false);
    setSkillTailwindCSS(true);
    setSkillHtmlCss(false);
  };
  const handleHtmlCss = () => {
    setSkillReactJs(false);
    setSkillReactNative(false);
    setSkillJavaScript(false);
    setSkillNode(false);
    setSkillMongoDB(false);
    setSkillFirebase(false);
    setSkillRestApi(false);
    setSkillTailwindCSS(false);
    setSkillHtmlCss(true);
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
          <li 
                      onClick={handleNode}
                      className={`${
                          skillNode
                            ? "border-l-2 border-l-textGreen text-textGreen"
                            : "border-l-2 border-l-hoverColor text-textDark"
                        } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                      >
            Node JS
          </li>
          <li
            onClick={handleMongoDB}
            className={`${
                skillMongoDB
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            MongoDB
          </li>
          <li
            onClick={handleFirebase}
            className={`${
                skillFirebase
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            Firebase
          </li>
          <li
            onClick={handleRestApi}
            className={`${
                skillRestApi
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            Rest API
          </li>
          <li
            onClick={handleTailwindCSS}
            className={`${
                skillTailwindCSS
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            TailwindCSS
          </li>
          <li
            onClick={handleHtmlCss}
            className={`${
                skillHtmlCss
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              
          >
            HTML&CSS
          </li>
        </ul>
        {skillReactJs && <ReactJs />}
        {skillReactNative && <ReactNative />}
        {skillJavaScript && <JavaScript />}
        {skillNode && <NodeJs />}
        {skillMongoDB && <MongoDB />}
        {skillFirebase && <Firebase />}
        {skillRestApi && <RestApi />}
        {skillTailwindCSS && <TailwindCSS />}
        {skillHtmlCss && <HtmlCss />}
      </div>
    </div>
  );
};

export default Skills;
