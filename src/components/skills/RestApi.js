import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function RestApi() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        REST API, JSON Server & AsyncStorage
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have used JSON Server and AsyncStorage in various projects to manage data efficiently and provide seamless user experiences.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the ToDoList app, I implemented JSON Server for mock data during development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          For the Employee App, I utilized JSON Server to manage employee records.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I used AsyncStorage for React Native mobile apps, including the Shopping List and Audio Recording apps, to store data locally on the device.
        </li>
      </ul>
    </motion.div>
  );
}

export default RestApi;
