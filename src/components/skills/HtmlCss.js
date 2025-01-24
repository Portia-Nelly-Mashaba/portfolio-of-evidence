import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function HtmlCss() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        HTML & CSS
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My knowledge in HTML has helped me understand the structure of building apps in React JS, especially tags and CSS styling.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I enjoy both inline and external CSS styling, which allows me to create visually appealing and responsive designs.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have used HTML and CSS in various projects, including the Hotel Booking App and Shopping List, to build professional and user-friendly interfaces.
        </li>
      </ul>
    </motion.div>
  );
}

export default HtmlCss;
