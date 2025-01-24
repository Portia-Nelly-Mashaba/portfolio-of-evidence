import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function MongoDB() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MongoDB
      </h3>
      <p className="mt-1 font-medium text-textGreen tracking-wide">Beginner</p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability. It stores data in flexible, JSON-like documents.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have used MongoDB in the Marketplace App, where I implemented a database to store product listings, user profiles, and transaction records.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In the Restaurant Reserving App, I utilized MongoDB to manage reservation data, including customer details, reservation times, and table availability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I also developed a Recipe App using MongoDB, where I created a database to store recipes, and ingredients, ensuring efficient data retrieval and management.
        </li>
      </ul>
    </motion.div>
  );
}

export default MongoDB;
