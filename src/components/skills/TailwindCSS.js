import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function TailwindCSS() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Tailwind CSS
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Beginner</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Tailwind CSS is a utility-first CSS framework that helps in building responsive and professional apps quickly and efficiently.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have used Tailwind CSS in the Hotel Booking App, where it helped me create a responsive and visually appealing user interface.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the Shopping List app, Tailwind CSS allowed me to build a clean and professional layout with minimal effort.
        </li>
      </ul>
    </motion.div>
  );
}

export default TailwindCSS;
