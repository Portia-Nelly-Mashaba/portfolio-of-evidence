import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function NodeJs() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Node.js
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Intermediate</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Node.js is a powerful JavaScript runtime built on Chrome's V8 engine,
          enabling server-side scripting and building scalable network applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have used Node.js in the Employee App, where I implemented RESTful APIs
          for managing employee data and integrated authentication using JWT.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the Recipe App, I utilized Node.js with Express.js to create a backend
          server that handles CRUD operations for recipes, ensuring efficient data management.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Additionally, I integrated a payment gateway in a React Native app using Node.js
          to handle secure transactions and payment processing.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the Restaurant Reservation App, I used Node.js to create a backend system
          that manages reservations, sends confirmation emails, and handles user authentication.
        </li>
      </ul>
    </motion.div>
  );
}

export default NodeJs;
