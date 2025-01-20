import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function ReactJs() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        React Js
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          React JS is a popular JavaScript library for building user interfaces,
          particularly single-page applications. It allows developers to create
          reusable UI components.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have used React JS in the Hotel App, where I implemented dynamic
          room booking features and integrated third-party APIs for real-time
          availability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the Shopping List app, I added Redux for state management, enabling
          efficient handling of complex state changes and ensuring a seamless
          user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I also utilized React JS in various other projects, leveraging its
          component-based architecture to build scalable and maintainable
          applications.
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactJs;
