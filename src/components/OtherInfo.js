import React from "react";
import SectionTitle from "./SectionTitle";
import { TiArrowForward } from "react-icons/ti";

const OtherInfo = () => {
  const currentDate = new Date().toLocaleDateString("en-GB");

  return (
    <div className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <div className="w-full flex flex-col items-center">
        <SectionTitle title="Other Information" titleNo="07" />
      </div>

      <div className="w-full flex flex-col items-start mt-10">
        <h3 className="text-xl font-titleFont font-semibold tracking-wide text-textGreen">
          Feedback and Reflections
        </h3>
        <p className="mt-2">
          <strong>Facilitator Feedback:</strong>{" "}
          <span className="text-base text-textDark">No Feedback yet</span>
        </p>
        <p className="mt-2">
          <strong>Self-Reflection:</strong>{" "}
          <span className="text-base text-textDark">
            During the program, I have significantly enhanced my skills in
            software development, particularly in managing full project
            lifecycles and front-end development using React JS, HTML, and CSS.
            My strengths lie in my problem-solving abilities and proficiency in
            various programming languages, while I continue to seek improvement
            in advanced database management and UI/UX design to further elevate
            my capabilities.
          </span>
        </p>
      </div>
      <div className="w-full flex flex-col items-start mt-10">
        <h3 className="text-xl font-titleFont font-semibold tracking-wide text-textGreen">
          Post-Program Goals
        </h3>
        <p className="mt-2">
          <strong>Short-Term Goals:</strong>
        </p>
        <ul className="text-base list-disc list-inside ml-4">
          <li className="flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            Enhance my skills in DevOps to streamline development processes
            and improve deployment efficiency. This will involve learning new tools and techniques to automate and optimize various stages of the software development lifecycle, from code integration to deployment.
          </li>
          <li className="flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            Obtain certifications in advanced database management to deepen my
            understanding and expertise in this area. By gaining these certifications, I aim to enhance my ability to design, implement, and maintain robust and scalable database systems.
          </li>
        </ul>
        <p className="mt-2">
          <strong>Long-Term Goals:</strong>
        </p>
        <ul className="text-base list-disc list-inside ml-4">
          <li className="flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            Transition into a leadership role, mentoring junior developers and
            guiding project teams to success. This will involve not only technical expertise but also strong communication and management skills to foster a collaborative and productive work environment.
          </li>
          <li className="flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            Develop and launch my own tech startup, leveraging my diverse
            skill set to create innovative solutions for real-world problems. This long-term goal will require a combination of technical knowledge, business acumen, and entrepreneurial spirit to bring new ideas to market successfully.
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center mt-10">
        <p className="text-sm text-gray-500">Last update: {currentDate}</p>
      </div>
    </div>
  );
};

export default OtherInfo;
