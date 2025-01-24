import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Firebase() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Firebase
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Firebase is a comprehensive app development platform that provides a variety of tools and services to help developers build high-quality apps.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have used Firebase in the Hotel Booking App, where I implemented real-time database features to manage bookings and user data efficiently.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the Restaurant Reservation App, I utilized Firebase for authentication, ensuring secure user login and registration processes.
        </li>
      </ul>
    </motion.div>
  );
}

export default Firebase;
