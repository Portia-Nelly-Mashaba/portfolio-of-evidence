import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function ReactNative() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        React <span className="text-textGreen tracking-wide">Native</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textGreen tracking-wide">
        Intermediate
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          React Native is a framework that allows developers to build mobile
          apps for iOS and Android using a single JavaScript codebase.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have built an Audio Recording app with native local storage, which
          allows users to record and save audio files directly on their devices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I developed a Gallery and Location app with an SQLite backend,
          enabling users to store and manage their photos and location data
          efficiently.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Currently, I am working on a robust Restaurant app in collaboration
          with my colleague at Codetribe. This project is challenging, but it is
          helping me improve my skills and gain valuable experience in mobile
          app development.
        </li>
      </ul>
    </motion.div>
  );
}

export default ReactNative;
