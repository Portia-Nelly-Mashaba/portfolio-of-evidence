import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function JavaScript() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        JavaScript
      </h3>
      <p className="text-sm mt-1 font-medium text-textGreen tracking-wide">
        Intermediate
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          JavaScript is a versatile and essential programming language for
          creating dynamic and interactive web applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          JavaScript played a crucial role in learning React and React Native,
          as both frameworks are built on top of JavaScript.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          It enabled me to understand the core concepts of component-based
          architecture and state management, which are fundamental to React and
          React Native.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          JavaScript's flexibility and extensive ecosystem have allowed me to
          build complex and efficient applications, enhancing my overall
          development skills.
        </li>
      </ul>
    </motion.div>
  );
}

export default JavaScript;
